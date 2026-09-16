const http = require('http');
const net = require('net');

const dbHost = process.env.DB_HOST || 'db';
const dbPort = Number(process.env.DB_PORT || 5432);

function checkDatabase() {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host: dbHost, port: dbPort });
    socket.setTimeout(3000);
    socket.once('connect', () => {
      socket.end();
      resolve();
    });
    socket.once('timeout', () => socket.destroy(new Error('Tiempo de espera agotado')));
    socket.once('error', reject);
  });
}

const server = http.createServer(async (_req, res) => {
  try {
    await checkDatabase();
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('App Node.js conectada al servicio PostgreSQL\n');
  } catch (error) {
    res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`PostgreSQL no disponible: ${error.message}\n`);
  }
});

server.listen(3000, async () => {
  console.log('Servidor corriendo en puerto 3000');
  console.log(`Base de datos configurada en ${dbHost}:${dbPort}`);
  try {
    await checkDatabase();
    console.log('Conexión TCP con PostgreSQL verificada');
  } catch (error) {
    console.error('No se pudo verificar PostgreSQL:', error.message);
  }
});
