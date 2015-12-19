Template.userLogin.events({
  'submit #usernameForm':function(e, template) {
    e.preventDefault();

    // Create a user
    Accounts.createUser({
      username: template.find("#username").value,
      password: '1',
    }, function(error) {
      if (error) {
        // Display the user creation error to the user however you want
      }
    });
  },
});

Template.userLoginLink.events({
  // When a user logs in using the link shared by another person
  'submit #usernameForm': function(e, template) {
    e.preventDefault();

    // Create the user
    Accounts.createUser({
      username: template.find("#username").value,
      password: '1',
    }, function(error) {
      Meteor.call('joinRoom', Meteor.userId(), Session.get('room'));
      if (error) {
        // Display the user creation error to the user however you want
      }
    });
  }
});

Template.userLoginLink.helpers({
  'room': function() {
    var p1 = Meteor.users.findOne(this.room.players.player1);
    return p1;
  }
});