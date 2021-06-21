const EventEmitter = require('events');

//event emmitter is a class so we need to extend it 
class MyEmitter extends EventEmitter {}

//creating object of event Emitter
const myEmitter = new MyEmitter();

//creating an event remeber we are creating not calling
myEmitter.on('WaterFull', () => {
	console.log('Close the Tap!');

	//it will be called after 3 Seconds
setTimeout(() => {
	console.log("2nd time saying close the tap");
}, 3000);

});

//Event name must be Specified
myEmitter.emit('WaterFull');












// "type" : module    ->remove this from package.json becuase this adds ES6