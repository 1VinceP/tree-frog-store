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
        
    };

    deleteItem( id ) {
        axios.delete( `/api/delete/${id}` ).then( () => { axios.get( `/api/cart/${this.state.userId}` ).then( response => {
            this.setState({
                cart: response.data
            })
        } ) } )
        console.log( 'deleted' )
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
                            <div><b>Type:</b> {cart.type}</div>
                            <div><b>Mat:</b> {cart.material}</div>
                            <div><b>BC:</b> {cart.basecolor}</div>
                            <div><b>Deco:</b> {cart.decoration}</div>
                            <div><b>DC:</b> {cart.decocolor}</div>
                            <div><b>Req:</b> {cart.request}</div>
                            <button className='close-button' onClick={ () => this.deleteItem( cart.id ) }>&#10006;</button>
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