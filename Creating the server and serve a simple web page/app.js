/* jshint esnext: true */

var http = require("http");// http module..

http.createServer(function(req, res) {// creating the server..

   res.writeHead(200, {"Content-Type": "text/html"});
   res.end(`<!DOCTYPE html>
     <html>
       <head>
         <title>Web Server</title>
       </head>
       <body>
         <h1>Hello World</h1>
     </html>
   `);

}).listen(3000);

console.log("Server running http://localhost:3000");
