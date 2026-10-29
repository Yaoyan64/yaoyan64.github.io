/* Italic gene symbols are explicitly scoped to the papers that discuss genes.
 * Proteins, receptors, pathways and other uppercase abbreviations stay roman.
 * HGNC: https://www.genenames.org/help/faq/ */
(() => {
  'use strict';
  const symbolsByPaper=Object.freeze({
    'pub-2026-fcgr2a':['FCGR2A'],
    'pub-2025-slc20a2':['Slc20a2'],
    'pub-2025-atxn3':['ATXN3']
  });
  const escape=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function format(value,paper){
    const text=String(value??''),symbols=symbolsByPaper[typeof paper==='string'?paper:paper?.id];
    if(!symbols)return escape(text);
    const matcher=new RegExp('\\b('+symbols.join('|')+')\\b','g');let result='',cursor=0;
    for(const match of text.matchAll(matcher)){result+=escape(text.slice(cursor,match.index))+'<i class="gene-symbol">'+escape(match[0])+'</i>';cursor=match.index+match[0].length;}
    return result+escape(text.slice(cursor));
  }
  window.WX_ACADEMIC=Object.freeze({format,escape,symbolsFor:paper=>(symbolsByPaper[typeof paper==='string'?paper:paper?.id]||[]).slice()});
})();
