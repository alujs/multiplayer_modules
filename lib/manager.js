var Events = require('../lib/events.js');
var host = require('../lib/rooms.js');
    host = new Rooms();
var io; 


var Manager = function( io, args ) {
   if(args !== undefined) {
   	 Events = Events(args);
   } else {
   	 Events = Events();
   }
   io = io; 
   return function( socket ) {
   	 for(var event in events) {
   	   socket.on(event, events[event]);
   	 }
   }
};


// join, disconnect, move, hit, fire
// killed

module.exports = Manager; 
// join :
// step 1 : need socket
// step 2 : need room name
// step 3 : need a new sync