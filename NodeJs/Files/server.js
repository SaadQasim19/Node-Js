import http from 'http';
const Port = 3000;
const server = http.createServer((req , res)=>{
    res.end("Hello World");
});
server.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`);
});
