module.exports = {
    getSessionUser: ( req, res, next ) => {
        req.app.get('db').find_user( req.session.user.id ).then( response => {
            res.status(200).send( response )
        })
    }
}