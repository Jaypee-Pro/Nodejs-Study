//event module and event emitter class
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('test',(num1,num2)=>{
  console.log('eventEmitter has occured');
  console.log(num1+num2);
});

eventEmitter.emit('test',2,3);

//extends EventEmitter class
class newEmitter extends EventEmitter{
   constructor(name){
     super();
     this._name = name;
   }
   //getter function
   get name(){
     return this._name;
   }
}

//instance
let newEmit = new newEmitter('jaypee');
let newEmitB = new newEmitter('joyce');

newEmit.on('name',()=>{
  console.log(`I am ${newEmit.name}`);
})
newEmitB.on('name',()=>{
  console.log(`I am ${newEmitB.name}`);
})
//to run this code
newEmit.emit('name');
newEmitB.emit('name');