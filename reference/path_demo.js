const path = require("path");
//Base file name
console.log(path.basename(__filename)); //Gives us the file name
//Directory name
console.log(path.dirname(__filename));
//File extension
console.log(path.extname(__filename));
//create path objects with the parse method
console.log(path.parse(__filename)); //Give us an object with several properties that we can access using the dot nation eg;
console.log(path.parse(__filename).name); //gives name path_demo
//Concatenate paths
