import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.url === '/image') {
    const img = fs.readFileSync('../Images/code.png'); // ya pic.jpg
    res.setHeader('Content-Type', 'image/png'); // ya image/jpeg
    res.end(img);
  } else {
    res.end('No image found');
  }
});

server.listen(8000, () => console.log('http://localhost:8000/image'));
