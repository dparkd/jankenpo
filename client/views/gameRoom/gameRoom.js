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

    if (p1.status.online === true && p2.status.online === true) {
      return true;
    } else {
      return false;
    }
  }
});

Template.gameRoom.events({
  'click .play': function(e) {
    e.preventDefault(); 

    var move = $(e.currentTarget).data('value');
    Meteor.call('playMove', Meteor.userId(), move, Session.get('room'));
  }
})