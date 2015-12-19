Meteor.methods({
  'createRoom': function(userId, roomName) {
    // insert the room into the db and return it to the client
    return Rooms.insert({
      room: {
        name: roomName, 
        players: {
          player1: userId, 
          player2: ""
        }
      }
    });
  },

  // Joining the room from a link
  'joinRoom': function(userId, room) {
    Rooms.update(room, {$set: {'room.players.player2': userId}});
  },

  // Playing the game
  'playMove': function(userId, move, room) {
    var room = Rooms.findOne(room);

    if (room.room.players.player1 === userId) {
      Rooms.update(room, {$set: {'room.moves.move1': move}});
    } else if (room.room.players.player2 === userId) {
      Rooms.update(room, {$set: {'room.moves.move2': move}});
    }
  }
})