Router.configure({
  layoutTemplate: 'basicLayout'
});


Router.route('/', function () {
  this.render('home');
});

Router.route('/jankenpo/:_id', function() {
  if (Meteor.user()) {
    Session.set('room', this.params._id);
    this.render('gameRoom', {
      data: function() {
        return Rooms.findOne({"_id": this.params._id});
      }
    });
  } else {
    Session.set('room', this.params._id);
    this.render('linkhome', {
      data: function() {
        return Rooms.findOne({"_id": this.params._id});
      }
    });
  }
})