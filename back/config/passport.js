var passport         = require('passport');
var GoogleStrategy   = require('passport-google-oauth2').Strategy;
var FacebookStrategy   =  require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID      : '683854711500-pd4725f8q4rtnum1qfff7hmod2dhia80.apps.googleusercontent.com',
    clientSecret  : 'CTjCaBmhJZQylf30fXLsGKbB',
    callbackURL   : '/auth/google/callback',
    passReqToCallback   : true
  }, function(request, accessToken, refreshToken, profile, done){
    console.log('profile: ', profile);
    var user = profile;

    done(null, user);
  }
));

passport.use(new FacebookStrategy(
  {
    clientID      : '211100520685336',
    clientSecret  : 'abb849349995ca0ee83655c2c4383a67',
    callbackURL   : '/auth/facebook/callback',
    passReqToCallback   : true
    ,profileFields:['id', 'email', 'gender', 'link', 'name', 
  'timezone', 'updated_time', 'verified', 'displayName' ]
  }, function(request, accessToken, refreshToken, profile, done){
    console.log('profile: ', profile);
    var user = profile;

    done(null, user);
  }
));

module.exports = passport;