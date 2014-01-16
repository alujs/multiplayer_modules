var Sync = function( name, time ) {
  this.name = name || 'ziggy';  
  this.gamestate = {};
  this.cycle = time || 1000;
  this.instanceTime = new Date().getTime();
};


Sync.prototype = Object.create({});

Sync.prototype.setInit = function( packet ) {
  this.gamestate[packet.name] =
	  { 
	   	name: packet.name,
	   	time: oldtime;
	   	xv: packet.aVeloc[0],
	  	yv: packet.aVeloc[1],
	  	zv: packet.aVeloc[2],
	  	x: packet.pos[0],
	  	y: packet.pos[1],
	  	z: packet.pos[2]
	  }
};

Sync.prototype.setMove = function( packet ) {
	var target = this.gamestate[packet.name];
	var current = new Date().getTime();
	var calctime = (current - target.time)/1000;
  var diffx  = target.xv * (this.cycle / 1000) * calctime;
  var diffy  = target.yv * (this.cycle / 1000) * calctime;
  var diffz  = target.zv * (this.cycle / 1000) * calctime;
      diffx = Math.abs(target.x- packet.pos[0])/(diffx);
      diffy = Math.abs(target.y - packet.pos[1])/(diffx);
      diffz = Math.abs(target.z - packet.pos[2])/(diffz);
  if(diffx <= 5 || diffy <= 5 || diffz <= 5) {
    this.gamestate[packet.name] =
	   { 
	   	 name: packet.name,
	   	 time: oldtime;
	   	 xv: packet.aVeloc[0],
	  	 yv: packet.aVeloc[1],
	  	 zv: packet.aVeloc[2],
	  	 x: packet.pos[0],
	  	 y: packet.pos[1],
	  	 z: packet.pos[2]
	   }
	} else {
	  return;
  }
};


Sync.prototype.sync = function( ) {
  socket.
};

Sync.prototype.setFire = function( packet )

Sync.prototype.create = function(event, func) {
  Sync.prototype[event] = func; 
}
module.exports = Sync; 