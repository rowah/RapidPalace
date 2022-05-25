//brings the even emitter
const EventEmitter = require("events");

//creates an emiiter class
class MyEmitter extends EventEmitter {}

//init Object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on("event", () => {
  console.log("Event fired!");
});

//emitt event
myEmitter.emit("event");
