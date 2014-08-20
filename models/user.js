///////////////////////////////////////////////////////////////////
//  mongoose //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

mongoose.connect(process.env.MONGOHQ_URL);

var Schema = mongoose.Schema;


///////////////////////////////////////////////////////////////////
//  models ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

//  User

var userSchema = new Schema({
  firstName:  { type: String, required: true },
  lastName:   { type: String, required: true },
  email:      { type: String, required: true, index: { unique: true } },
  password:   { type: String, required: true },
  zip:        { type: String, required: true },
  township:   { type: String, required: true }
});


// Bcrypt middleware
userSchema.pre('save', function(next) {
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Password verification
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);

