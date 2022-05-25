//Gives info about environment, about OS
const os = require("os");

//Platform
console.log(os.platform()); //gives Darwin, the platform for Mac

//CPU Architechture
console.log(os.arch()); //x64

//CUP core info
console.log(os.cpus()); //Gives an object with the CPU info

//Free memory
console.log(os.freemem());

//Total Memory
console.log(os.totalmem());

//HomeDirectory
console.log(os.homedir());

//Uptime
console.log(os.uptime());
