import http from "http";
const Port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type","text/plain");
    res.end("Welcome to the Home Page");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to the About Page");
  }else if(req.url ==="/user"){
    res.setHeader("Content-Type" , "application/json");
    const user = [{
        name: "Saad Qasim",
        age: 20,
        email: "saad@example.com"
    },{
      name: "Kashmala Malik",
      age:19,
      email:"mala@example.com"
    }];
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "404 Not Found" }));
  }
});

server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
