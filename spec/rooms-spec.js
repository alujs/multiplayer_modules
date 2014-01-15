var Rooms = require("../lib/rooms.js");
var socketid = '4872abc';
var room_list;
var init_data = {
  name: 'Bob',
  ship: 'Light',
  room: 'dolem'
}

describe("Rooms", function () {
	beforeEach(function() {
		room_list = new Rooms( socketid, 'Bob', init_data);
	});

	afterEach(function() {
		room_list = '';
	});

  it("It should initialize a room with socketid ", function () {
    room_list = new Rooms(socketid, 'dolem', init_data);
    var list = Object.keys(room_list.rooms['dolem'].playerList).length;
    expect(list).toEqual(1);
  });

  it("It should store new data ", function () {
    room_list = new Rooms(socketid, 'dolem', init_data);
    room_list.add('4zzz45', 'dolem', {name: 'Davey', ship: 'Medium', room:'dolem'});
    var location = room_list.rooms['dolem'];
    expect(location.playerList['Bob'].name).toEqual('Bob');
    expect(location.playerList['Davey'].name).toEqual('Davey');
  });

  xit("It should not overwrite old data ", function () {
    room_list = new Rooms(socketid, 'dolem', init_data);

  });

});  