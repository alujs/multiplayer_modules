var Room = function( socket, room, playerData ) {
	this.rooms = {};
	this.sockets = {};
	this.rooms[room] = {};
	this.rooms[room].playerList = {};
	this.rooms[room].playerList[playerData.name] = playerData;
	this.sockets[socket] = {name: playerData.name, socket: socket, ship: playerData.ship};
	this.rooms[socket] = {name: playerData.name, room: room};
};

Room.prototype = Object.create({});


Room.prototype.add = function( socket, room, playerData) {
  this.sockets[socket] = {name: playerData.name, room: room, ship: playerData.ship};
  this.rooms[room].playerList[playerData.name] = playerData;
  this.rooms[socket] = {name: playerData.name, room: room};
}


module.exports = Room;

