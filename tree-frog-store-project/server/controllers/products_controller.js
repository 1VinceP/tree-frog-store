const chalk = require('chalk');

module.exports = {

    retrieveAll: ( req, res, next ) => {

        req.app.get('db').get_products()
            .then( response => res.status(200).send( response ) )
    },

    createProduct: ( req, res, next ) => {
        const { type, material, baseColor, secondaryColor, decoration, decoColor, centerBase, centerCandle, request, creatorId, paid, shipped } = req.body

        req.app.get('db').create_product( [type, material, baseColor, secondaryColor, decoration, decoColor, centerBase, centerCandle, request, creatorId, paid, shipped] )
            .then( response => {
                console.log( chalk.yellow('New product added') )
                res.status(200).send(response)
            } )
    },

    getCart: ( req, res, next ) => {
        // console.log( req.params.id )

        req.app.get('db').get_user_cart( req.params.id )
            .then( response => res.status(200).send(response) )
            // .catch( console.log( chalk.red('Cart failed') ) )
    },

    delete: ( req, res, next ) => {

        req.app.get('db').delete_item( req.params.id )
            .then( response => {
                console.log( 'made it here at least' )
                res.status(200).send(response)
            } )
    }
}