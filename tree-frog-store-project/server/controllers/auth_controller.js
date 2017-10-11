module.exports = {

    login: function( req, res ) {
        console.log( req.user )
        if( !req.user )
            return res.status(404).send( 'User not found' )
        else
            return res.status(200).send( req.user )
    },

    logout: function( req, res ) {
        req.logOut(); // Lougout function given from passport
        return res.redirect( 302, 'https://tree-frog-store.herokuapp.com/#/' ); // res.redirect comes from express
    }
}