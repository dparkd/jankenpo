Template.createRoom.events({
  'click .create': function(e) {
    e.preventDefault();

    // db call
    var roomName = $('#roomName').val();
    if (roomName) {
      Meteor.call('createRoom', Meteor.userId(), roomName, function(err, result) {
        Router.go('/jankenpo/' + result);
      });
    } else {
      console.log('empty');
    }
  },
});


Template.createRoom.helpers({
  'onlineUsers': function() {
    return Meteor.users.find({ "status.online": true })
  }
})