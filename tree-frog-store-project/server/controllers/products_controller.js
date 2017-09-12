module.exports = {

    retrieveAll: ( req, res, next ) => {

        req.app.get('db').get_products().then( response => {
            res.status(200).send( response )
        } )
    }
}