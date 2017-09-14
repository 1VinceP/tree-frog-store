import React, { Component } from 'react';
import axios from 'axios';
import './account.css';

class Account extends Component {
    constructor() {
        super();

        this.state = {
            currentS1: '',
            currentS2: '',
            currentCity: '',
            currentState: '',
            currentZip: null,

            street1: '',
            street2: '',
            city: '',
            state: '',
            zip: null
        }

        this.submitAddress = this.submitAddress.bind(this)
    }

    componentDidMount() {
        window.scrollTo( 0, 0 )   
        
        axios.get( '/api/getaddress' ).then( response => {
            console.log( response )
            this.setState({
                currentS1: response.data[0].street1,
                currentS2: response.data[0].street2,
                currentCity: response.data[0].city,
                currentState: response.data[0].state,
                currentZip: response.data[0].zip
            })
        })
        console.log( this.state.currentS1 )
    }

    handleInputChange( e ) {
        let value = e.target.value
        let name = e.target.name

        this.setState({
            [name]: value
        })
        console.log( this.state.street1, this.state.street2, this.state.city, this.state.state, this.state.zip )
    };

    submitAddress() {
        // Not currently necessary to do it this way. This is an example
        console.log( this.props.location.query.id )
        let body = {
            id: this.props.location.query.id,
            street1: this.state.street1 === '' ? this.state.currentS1 : this.state.street1,
            street2: this.state.street2 === '' ? this.state.currentS2 : this.state.street2,
            city: this.state.city === '' ? this.state.currentCity : this.state.city,
            state: this.state.state === '' ? this.state.currentState : this.state.state,
            zip: this.state.zip === null ? this.state.currentZip : this.state.zip
        }

        axios.put( '/api/updateaddress', body ).then( ( response ) => {
            
            axios.get( '/api/getaddress' ).then( response => {
                console.log( response )
                this.setState({
                    currentS1: response.data[0].street1,
                    currentS2: response.data[0].street2,
                    currentCity: response.data[0].city,
                    currentState: response.data[0].state,
                    currentZip: response.data[0].zip
                })
            })
        } )
    }

    render() {

        return(
            <div className='account-body'>
                <div className='bg-box'>
                    <h2>Welcome to your account!</h2>
                    <p className='account-sub-title'>Here you can make changes to your information</p>
                </div>

                {/* Address Section Here */}
                <div className='bg-box'>
                    <h2>Shipping Address</h2>
                    <br/>
                    <p className='where'>Street 1*</p>
                    <input placeholder={this.state.currentS1} name='street1' onChange={ e => this.handleInputChange(e) } />
                    <p className='where'>Street 2</p>
                    <input placeholder={this.state.currentS2} name='street2' onChange={ e => this.handleInputChange(e) } />
                    <p className='where'>City*</p>
                    <input placeholder={this.state.currentCity} name='city' onChange={ e => this.handleInputChange(e) } />
                    <p className='where'>State*</p>
                    <input placeholder={this.state.currentState} name='state' onChange={ e => this.handleInputChange(e) } />
                    <p className='where'>Zip*</p>
                    <input placeholder={this.state.currentZip} name='zip' onChange={ e => this.handleInputChange(e) } />
                    <br/>
                    <button className='change-button' onClick={ this.submitAddress }>Submit Changes</button>
                </div>

                {/* Previous Orders Section Here */}
                <div className='bg-box'>
                    <h2>Previous Orders</h2>
                </div>

            </div>
        )
    }
}

export default Account;