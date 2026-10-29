/* Refresh public, DOI-matched Crossref citation counts. No account or API key.
 * Successful older values survive network or indexing failures with their date.
 * This script only writes the local data snapshot; it never commits or deploys. */
import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function readAssignment(text,key){const context={window:{}};vm.runInNewContext(text,context,{timeout:1000});return context.window[key];}
const papers=readAssignment(await readFile(path.join(root,'assets/publications.js'),'utf8'),'PUBLICATIONS');
let previous={records:{}};try{previous=readAssignment(await readFile(path.join(root,'assets/citations-data.js'),'utf8'),'WX_CITATION_DATA')||previous;}catch{}
// Scheduled builds can retain the last deployed successful snapshot without
// writing bot commits. Remote JavaScript is parsed as JSON, never evaluated.
if(process.env.CITATION_PREVIOUS_SITE){try{
  const base=new URL(process.env.CITATION_PREVIOUS_SITE);if(base.protocol!=='https:'||base.username||base.password)throw Error('Invalid previous site URL');
  const url=new URL(base.href.replace(/\/$/,'')+'/assets/citations-data.js');url.searchParams.set('refresh',String(Date.now()));
  const response=await fetch(url,{signal:AbortSignal.timeout(8000)});
  if(response.ok){const source=await response.text(),prefix='window.WX_CITATION_DATA = ',start=source.indexOf(prefix);if(start<0)throw Error('Unknown snapshot');
    const deployed=JSON.parse(source.slice(start+prefix.length).trim().replace(/;$/,''));
    for(const paper of papers){const record=deployed.records?.[paper.id],local=previous.records?.[paper.id];if(paper.doi&&record?.source==='Crossref'&&record.doi?.toLowerCase()===paper.doi.toLowerCase()&&Number.isSafeInteger(record.count)&&record.count>=0&&Number.isFinite(Date.parse(record.checkedAt))&&Date.parse(record.checkedAt)>(Date.parse(local?.checkedAt)||0)){previous.records[paper.id]=record;}}
  }
}catch{console.log('Previous deployment snapshot unavailable; retaining bundled verified data.');}}
const now=new Date().toISOString(),records={};
const normalize=text=>String(text||'').normalize('NFKC').toLowerCase().replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
function titleMatches(a,b){const x=normalize(a),y=normalize(b);if(x===y)return true;const A=new Set(x.split(' ')),B=new Set(y.split(' ')),overlap=[...A].filter(w=>B.has(w)).length;return overlap/Math.max(1,new Set([...A,...B]).size)>=.88;}
function unavailable(p,status){const old=previous.records?.[p.id];if(old&&p.doi&&old.doi?.toLowerCase()===p.doi.toLowerCase()&&Number.isInteger(old.count)&&old.count>=0&&old.checkedAt)return {...old,status:'stale',lastAttemptAt:now,lastError:status};return {doi:p.doi||null,count:null,source:'Crossref',checkedAt:null,lastAttemptAt:now,status};}
async function update(p){
  if(!p.doi){records[p.id]=unavailable(p,'no-doi');return;}
  try{
    const response=await fetch('https://api.crossref.org/works/'+encodeURIComponent(p.doi),{signal:AbortSignal.timeout(18000),headers:{'User-Agent':'AcademicCitationUpdater/1.0 (public DOI metadata)','Accept':'application/json'}});
    if(!response.ok){records[p.id]=unavailable(p,response.status===404?'not-indexed':'fetch-failed');return;}
    const message=(await response.json()).message,count=message?.['is-referenced-by-count'];
    if(message?.DOI?.toLowerCase()!==p.doi.toLowerCase()||!titleMatches(p.title,message?.title?.[0])){records[p.id]=unavailable(p,'metadata-mismatch');return;}
    if(!Number.isSafeInteger(count)||count<0){records[p.id]=unavailable(p,'count-unavailable');return;}
    records[p.id]={doi:p.doi,count,source:'Crossref',checkedAt:now,lastAttemptAt:now,status:'verified',crossrefTitle:message.title[0]};
  }catch{records[p.id]=unavailable(p,'fetch-failed');}
}
// Crossref's public singleton pool currently allows one concurrent request.
// Keep requests sequential; retry transient failures without discarding the cache.
for(const paper of papers){
  await update(paper);
  if(paper.doi&&records[paper.id]?.lastError==='fetch-failed'){
    await new Promise(resolve=>setTimeout(resolve,1500));
    await update(paper);
  }
  if(paper.doi)await new Promise(resolve=>setTimeout(resolve,300));
}
const data={schemaVersion:1,source:'Crossref',fetchedAt:now,records};
await writeFile(path.join(root,'assets/citations-data.js'),'/* Public Crossref DOI metadata snapshot. Counts are not Google Scholar counts. */\nwindow.WX_CITATION_DATA = '+JSON.stringify(data,null,2)+';\n','utf8');
const statuses=Object.values(records).reduce((result,record)=>(result[record.status]=(result[record.status]||0)+1,result),{});
console.log(JSON.stringify({source:'Crossref',fetchedAt:now,statuses,counts:Object.fromEntries(papers.map(p=>[p.id,records[p.id].count]))},null,2));
