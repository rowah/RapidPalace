const fs = require("fs");
const path = require("path");

//creating a folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");
}); // when we run node fs_demo.js we see a folder called test created

//create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World",
  (err) => {
    if (err) throw err;
    console.log("File written to...");
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " This is another added text",
      (err) => {
        if (err) throw err;
        console.log("File written to...");
      } //creates file hello.txt on the text folder
    );
  } //creates file hello.txt on the text folder
);

//adding text to the hello.txt use appendFile as writeFile overwrites what was already in the file
