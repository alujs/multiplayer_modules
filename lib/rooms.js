var Sync = require('sync.js');

var Room = function( socket, room, playerData, time ) {
	this.rooms = {};
	this.sockets = {};
	this.rooms[room] = {};
	this.rooms[room].playerList = {};
	this.time = time || 1000; 
};

Room.prototype = Object.create({});

Room.prototype.init = function( socket, room, playerData ) {
  this.rooms[room].playerList[playerData.name] = playerData;
  this.sockets[socket] = {name: playerData.name, socket: socket, ship: playerData.ship};
  this.rooms[room].sync = new Sync(room, this.time);	
}
Room.prototype.add = function( socket, room, playerData) {
  this.sockets[socket] = {name: playerData.name, room: room, ship: playerData.ship};
  this.rooms[room].playerList[playerData.name] = playerData;
}


module.exports = Room;
//write a test for init.
//write a test for sync;  