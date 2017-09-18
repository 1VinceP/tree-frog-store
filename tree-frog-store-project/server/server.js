require('dotenv').config();
const Auth0Strategy = require('passport-auth0');

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session')
    , chalk = require('chalk')
    , passport = require('passport')
    , stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    , nodemailer = require('nodemailer');

const strategy = require('./strategy')
    , auth_controller = require('./controllers/auth_controller')
    , products_controller = require('./controllers/products_controller')
    , email_controller = require('./controllers/email_controller')
    , session_controller = require('./controllers/session_controller');


let app = express();
app.use( bodyParser.json() );
app.use( cors() );
app.use( session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}) );
// app.use( checkForSession );
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( module.exports = new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},
    function( accessToken, refreshToken, extraParams, profile, done ) {
        const db = app.get('db')
        // If user exists, get their data. If not, create a new user
        db.find_user( profile.id ).then( user => {
            if( user[0] )
                return done( null, user )
            else {
                // console.log( profile )
                db.create_user( [profile.displayName, profile.emails[0].value, profile.id] )
                  .then( user => {
                      console.log( 'New User Created' )
                    return done( null, user )
                })
            };
        } );
        // return done( null, profile )
    }) );


///////////// Connecting database
// postgres:[username]:[password]@[host]:[port]/[database]
// postgres://ergdmstw:${productPass}@stampy.db.elephantsql.com:5432/ergdmstw
console.log( chalk.magenta(process.env.SQLURL) );
massive( process.env.SQLURL ).then( db => {
        app.set( 'db', db );
    //     app.get('db').init.seed().then( res => console.log( res ) )
    // } ).catch( err => {
    //     console.log( err );
} )

///////////////////////////////////////////////////////////////// AUTHENTICATION
passport.serializeUser( ( user, done ) => {
    // console.log( user )
    done( null, user )
} );
passport.deserializeUser( ( obj, done ) => {
    // console.log( 'dev', obj )
    // app.get('db').find_session_user( user[0].id ).then( user => {

        done( null, obj[0] )


    // })
} );

// AUTH CONTROLLER
app.get( '/auth', passport.authenticate( 'auth0' ) );
app.get( '/auth/callback', passport.authenticate( 'auth0', {
    successReturnToOrRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/',
    failureFlash: true
}) );
app.get( '/auth/me', auth_controller.login );
app.get( '/auth/logout', auth_controller.logout );

// SESSION CONTROLLER
app.get( '/api/user', session_controller.getSessionUser )
app.put( '/api/updateaddress', session_controller.updateAddress )
app.get( '/api/getaddress', session_controller.getAddress )

///////////////////////////////////////////////////////////////// END AUTHENTICATION

///////////////////////////////////////////////////////////////// DATABASE CALLS
// GET ALL FOR THE GALLERY
app.get( '/api/products', products_controller.retrieveAll )

// ADD NEW PRODUCT
app.post( '/api/createProd', products_controller.createProduct )

// GET ITEMS FOR USER'S CART
app.get( '/api/cart/:id', products_controller.getCart )

///////////////////////////////////////////////////////////////// END DATABASE CALLS

///////////////////////////////////////////////////////////////// STRIPE STUFF
app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
        amount: convertedAmt, // amount in cents, again
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from react app'
    }, function(err, charge) {
        if (err) return res.sendStatus(500)
        return res.sendStatus(200);
        // if (err && err.type === 'StripeCardError') {
        //   // The card has been declined
        // }
    });
  });
///////////////////////////////////////////////////////////////// END STRIPE STUFF

///////////////////////////////////////////////////////////////// NODEMAILER
app.post( '/api/send_email', email_controller.sendEmail );

///////////////////////////////////////////////////////////////// END NODEMAILER




let port = 9060;
const portChalk = chalk.cyan.underline
app.listen( port, () =>{
console.log( portChalk(`listening on port ${port}`) )
} )