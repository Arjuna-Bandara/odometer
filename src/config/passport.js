var passport = require('passport');
var User = require('../../models/User');
var config = require('./auth');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local').Strategy;
 
var localOptions = {
    usernameField: 'email'
};
 
var localLogin = new LocalStrategy(localOptions, function(email, password, done){
 
    User.findOne({
        email: email
    }, function(err, user){
 
        if(err){
            return done(err);
        }
 
        if(!user){
            return done(null, false, {error: 'Login failed. Please try again.'});
        }
 
        user.comparePassword(password, function(err, isMatch){
 
            if(err){
                return done(err);
            }
 
            if(!isMatch){
                return done(null, false, {error: 'Login failed. Please try again.'});
            }
 
            return done(null, user);
 
        });
 
    });
 
});
 
require('dotenv').config();

var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: 'eypZAZy0CY^g9%KreypZAZy0CY^g9%Kr'   //This should be moved to an environment variable in production
};
 
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    console.log(payload);
    User.findById(payload._id, function(err, user){
 
        if(err){
            return done(err, false);
        }
 
        if(user){
            done(null, user);
        } else {
            done(null, false);
        }
 
    });
 
});
 
passport.use(jwtLogin);
passport.use(localLogin);