module.exports = {
    getSessionUser: ( req, res, next ) => {
        if( !req.user ) {
            console.log( 'no user' )
            res.send( null )
        }
        else {
            console.log( req.user )
            res.send( req.user )
        }
    }
}