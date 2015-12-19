Template.gameRoom.helpers({
  'game': function() {
    return this;
  },

  'pOne': function() {
    return Meteor.users.findOne(this.room.players.player1);
  },

  'pTwo': function() {
    return Meteor.users.findOne(this.room.players.player2);
  },

  'ready': function() {
    var p1 = Meteor.users.findOne(this.room.players.player1);
    var p2 = Meteor.users.findOne(this.room.players.player2);

    console.log(p1.status.online);
    if (p1.status.online === true && p2.status.online === true) {
      return true;
    } else {
      return false;
    }
  }
})