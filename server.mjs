import app from "./app.mjs";
import http from 'http';
const port = normalizePort(process.env.port || 3000);
app.set("port", port);

const server = http.createServer(app);

server.listen(port, ()=> console.log(`le server est en cour d'execution au port ${port}`));


function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  
  /**
   * Event listener for HTTP server "error" event.
   */
  
