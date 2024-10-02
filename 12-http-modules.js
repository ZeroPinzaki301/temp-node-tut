const http = require('http');

const server = http.createServer((req, res) => {
  
  if(req.url === '/') {
    res.end(`Welcome to mobile Jolends`);
  }

  if(req.url === '/about') {
    res.end(`About Mobile Jolends and Jollibee love story`);
  }
  res.end(`
    <h1>Oops!</h1>
    <p>The page you are trying to access does not exist in our site :(</p>
    <a href="/">Back to Home</a>
    `);

})

server.listen(5000)