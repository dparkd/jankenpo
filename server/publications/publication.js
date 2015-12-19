Meteor.publish("users", function() {
  return Meteor.users.find({});
});

Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});

Meteor.publish("rooms", function() {
  return Rooms.find();
})