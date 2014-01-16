var gs = require('../lib/sync.js');
var gamestate;

var io = {};
io.sockets = {};
io.sockets.socket = function( identity ) { // individual
   return {
    identity: identity,
    storage: {},
    emit : function( command, message ) {
       this.storage[command] = message;   
    }
   }
};

io.sockets.in = io.sockets.socket; // game Room w/ sender 

var sockets = {};
sockets.broadcast = {};
sockets.broadcast.to = io.sockets.socket; // game Room w/o sender


describe("Sync", function () {
	beforeEach(function() {
	});

	afterEach(function() {
		gamestate = '';
	});


  it("It should initialize ", function() {
    gamestate = new gs(io, 'dolem');
    expect(gamestate.name).toEqual('dolem');
    expect(Object.keys(gamestate.io).length).toEqual(1);
  });

  it("It should maintain the game state", function() {

  });

  xit("It should force to sync ", function() {
  });

  xit("It should write to the database", function() {

  });

});  

// var packet = {
//   time: time,
//   pos: shipPosition.pos,
//   rot: shipPosition.rot,
//   aVeloc: shipPosition.aVeloc,
//   lVeloc: shipPosition.lVeloc
// };