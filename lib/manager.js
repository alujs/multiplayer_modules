var Rooms = require('../lib/rooms.js');

var Manager = function( flags ) {
 if(flags === 'default') {
   this.events = events;
 } else {
   this.events = {};
 }
 
 this.rooms = new Rooms();
};

Manager.prototype = Object.create({});

Manager.prototype.addListener = function( event, func ) {
  this.events[event] = func;
};

Manager.prototype.removeListener = function( event ) {
  delete this.events[event];
};

Manager.prototype.initialize = function() {
  for(var event in this.events) {
     socket.on(event, this.events[event]);
   }
  }
};

var events = {};

module.exports = Manager; 
