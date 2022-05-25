const url = require("url");

const myUrl = new URL("https://jrowah.com/");
console.log(myUrl.href);

//Host (root domain)
console.log(myUrl.host);

//HostaNAME (DOESNT GET THE PORT)
console.log(myUrl.hostname);
console.log(myUrl.pathname);
