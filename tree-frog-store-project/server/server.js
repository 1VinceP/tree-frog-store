require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session')
    , chalk = require('chalk')
    , passport = require('passport');

const strategy = require('./strategy')
    , auth_controller = require('./controllers/auth_controller');


let app = express();
app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}) );
// app.use( checkForSession );
app.use( cors() );
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( strategy );


///////////// Connecting database
// postgres:[username]:[password]@[host]:[port]/[database]
// postgres://ergdmstw:${productPass}@stampy.db.elephantsql.com:5432/ergdmstw
massive( process.env.SQLURL ).then( db => {
        app.set( 'db', db );
        app.get('db').init.seed().then( res => console.log( res ) )
    } ).catch( err => {
        console.log( err );
} )

///////////////////////////////////////////////////////////// AUTHENTICATION
passport.serializeUser( ( user, done ) => {
    // var userInfo = {
    //     id: user.id,
    //     displayName: user.displayName,
    //     nickname: user.nickname,
    //     email: user.email
    // }
    done( null, user )
} );
passport.deserializeUser( ( obj, done ) => {
    app.get('db').find_session_user( user[0].id ).then( user => {
        return done( null, user )
    })
} );

// AUTH CONTROLLER
app.get( '/auth', passport.authenticate( 'auth0' ) );
app.get( '/auth/callback', passport.authenticate( 'auth0', {
    successRedirect: 'http://localhost:3000/#/store',
    failureRedirect: 'http://localhost:3000/#/',
    failureFlash: true
}) );
app.get( '/auth/me', auth_controller.login );
app.get( '/auth/logout', auth_controller.logout );



let port = 9060;
const portChalk = chalk.cyan.underline
app.listen( port, () =>{
console.log( portChalk(`listening on port ${port}`) )
} )