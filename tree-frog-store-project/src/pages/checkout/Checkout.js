import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { secretStripeKey } from './stripeKey';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Checkout extends Component {
    constructor() {
        super();

        this.state = {
            redirect: false
        }
    }
    
    componentDidMount() {
        window.scrollTo( 0, 0 )
    }

    onPurchaseConfirmation() {
        let data = {
            username: 'vincent',
            email: 'meisadude@gmail.com',
            message: 'This is coming from Nodemailer!'
        }
        axios.post( 'http://localhost:9060/api/send_email', data ).then( response => {
            console.log( response );
        })
    }

    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:9060/api/payment', { token, amount: 1000 /* the amount actually charged*/ } ).then(response => {
            // this.onPurchaseConfirmation();
            // this.setState({
            //     redirect: true
            // })
            alert('Thanks for your purchase')
        });
    }

    render() {

        if( this.state.redirect )
            return <Redirect to='/confirmation' />

        return(
            <div>

                <StripeCheckout
                    token={this.onToken}
                    stripeKey={ 'pk_test_k1ZmSbaquoQabEKXdT1RBe3x' }
                    amount={1000} // The amount displayed at the bottom of the payment form
                />

                {/* <div onClick={ this.onPurchaseConfirmation }>Send email</div> */}

            </div>
        )
    }
}

export default Checkout;