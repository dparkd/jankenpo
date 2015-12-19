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

  'joinRoom': function(userId, room) {
    Rooms.update(room, {$set: {'room.players.player2': userId}});
  }
})