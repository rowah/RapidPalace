const fs = require("fs");
const path = require("path");

//creating a folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");
}); // when we run node fs_demo.js we see a folder called test created

//create and write to file
