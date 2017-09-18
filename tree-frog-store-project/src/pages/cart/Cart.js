import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './cart.css';

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            cart: [],
            userId: 0
        }
    }
    
    componentDidMount() {
        window.scrollTo( 0, 0 )

        axios.get( '/api/user' ).then( user => {
            if( user.data.username !== undefined ) {
                this.setState({
                    userId: user.data.id
                })
            }
            console.log( 'userId:', this.state.userId )
        }).then( () => { axios.get( `/api/cart/${this.state.userId}` ).then( response => {
            this.setState({
                cart: response.data
            })
        } ) } )
        
    }

    render() {

        console.log( this.state.cart )
        return(
            <div className='cart-body'>
                <br/><br/>
                <div>Cart</div>

                { this.state.cart.map( ( cart, i ) => {
                    return(
                        ( !cart.paid
                        ? <div key={i} className='cart-card'>
                            <div>{cart.type}</div>
                            <div>{cart.material}</div>
                            <div>{cart.baseColor}</div>
                            <div>{cart.decoration}</div>
                            <div>{cart.decoColor}</div>
                            <div>{cart.request}</div>
                        </div>
                        : console.log( 'Cannot display cart' ) )
                    )
                } ) }

                <Link to='/checkout'><button className='checkout-button'>Checkout</button></Link>
            </div>
        )
    }
}

export default Cart;