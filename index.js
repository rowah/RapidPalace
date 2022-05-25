//console.log('Hello from Node.js');
// const person = require("./person");
// const Person = require("./person1");
// const mtuOne = new Person("Julius", 21);
// mtuOne.greeting();

//Loading html css on webpage from our server
const http = require("http");
const path = require("path");
const fs = require("fs");
// const { Console } = require("console");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("<h1>Home</h1>"); //If you change Home to Homepage and reload, the page, it doesnt update. You have to manually reset the server. This is where Nodemon comes to play
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  `Server running in port ${PORT}`;
});
