var Sync = require('../lib/sync.js');


var Events = function( args ) {
  var events = methods;
  if(args !== undefined) {
    for(var i in args) {
      events[i] = args[i];
    }
  }
  return events; 
}

var methods = {};

methods.join = function( data ) {
  console.log(data);
  console.log('Player joined: ' +data.name + " at " + data.room);
  var target = host.rooms[data.room];
  if(host.rooms[data.room] !== undefined) {
  	host.init(socket, data.room, data);
  } else {
  	host.add(socket, data.room, data);
  }

  socket.join(data.room);
  socket.emit('player list', target.playerList);
  socket.emit('map', mapItems);
  socket.broadcast.to(data.room).emit('join', target.playerList[data.name]);
};

methods.disconnect = function() {
  var target = host.sockets[socket];
  delete host.rooms[target.room].playerList[target.name];
  delete host.sockets[socket];
  socket.broadcast.to(target.room).emit('leave', {name: target.name});
};

methods.hit = function( data ) {

};









module.exports = Events;
