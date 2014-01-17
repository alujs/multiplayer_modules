var Sync = require('../lib/sync.js');
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

var packet = {
  name: 'Bob',
  time: new Date().getTime(),
  lVeloc: [3,3,3],
  pos: [0,0,0]
};

var falsepacket = {
  name: 'Bob',
  time: new Date().getTime() + 3000,
  lVeloc: [3,3,3],
  pos: [3330,33330,33330]
};

var truthpacket = {
  name: 'Bob',
  time: new Date().getTime() + 1000,
  lVeloc: [3,3,3],
  pos: [3,3,3]
};

describe("Sync", function () {
	beforeEach(function() {
    gamestate = new Sync('dolem', 1000, 4, 3000);
	});

	afterEach(function() {
		gamestate = '';
	});


  it("It should initialize ", function() {
    expect(gamestate.name).toEqual('dolem');
    expect(gamestate.cycle).toEqual(1000);
    expect(gamestate.tol).toEqual(4);
  });

  it("It should reject values out of tolerance and init", function() {
    gamestate.setInit(packet);
    var result = gamestate.setMove(falsepacket);
    expect(result).toBe(false)
  });

  xit("It should call to sync ", function() {
    // need to attach spies at some point
  });

  it("It should accept truthy values", function() {
    gamestate.setInit(packet);
    var result = gamestate.setMove(truthpacket);
    expect(result).toBe(true)
  });

});  

// var packet = {
//   time: time,
//   pos: shipPosition.pos,
//   rot: shipPosition.rot,
//   aVeloc: shipPosition.aVeloc,
//   lVeloc: shipPosition.lVeloc
// };