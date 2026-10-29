import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args=process.argv.slice(2);
const option=(name,fallback)=>{const i=args.indexOf(name);return i>=0&&args[i+1]&&!args[i+1].startsWith('--')?args[i+1]:fallback;};
const base=path.dirname(fileURLToPath(import.meta.url));
const root=args.includes('--dist')?path.join(base,'dist'):base;
const port=Number(option('--port', '5173'));
const host=option('--host','127.0.0.1');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.md':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.jpeg':'image/jpeg','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2','.ttf':'font/ttf','.pdb':'chemical/x-pdb','.png':'image/png','.pdf':'application/pdf','.bib':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{
  try {
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end('Method not allowed');return;}
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file=path.resolve(root,'.'+(pathname.endsWith('/')?pathname+'index.html':pathname));
    const relative=path.relative(root,file);
    if(relative.startsWith('..')||path.isAbsolute(relative)||(!['index.html'].includes(relative)&&!relative.startsWith('assets'+path.sep))){res.writeHead(404);res.end('Not found');return;}
    const content=await readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:content);
  }catch{res.writeHead(404);res.end('Not found');}
});
server.listen(port,host,()=>console.log(`Local: http://${host}:${port}/`));
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
