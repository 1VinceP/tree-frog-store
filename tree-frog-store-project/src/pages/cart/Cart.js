import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './cart.css';

class Cart extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    
    componentDidMount() {
        window.scrollTo( 0, 0 )
    }

    render() {

        console.log( this.props.orderStyle )
        return(
            <div className='cart-body'>
                <br/><br/>
                <div>Cart</div>
                <Link to='/checkout'>Checkout</Link>
            </div>
        )
    }
}

export default Cart;