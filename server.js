// Servidor mínimo para la simulación (sin dependencias): muestra index.html.
const http = require('http');
const fs = require('fs');
const path = require('path');

const pagina = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
  fs.readFile(pagina, (error, datos) => {
    if (error) { res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Error'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(datos);
  });
}).listen(Number(process.env.PORT) || 3000, () => console.log('Simulación lista'));
