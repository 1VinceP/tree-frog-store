import React, { Component } from 'react';
import axios from 'axios';
import './admin.css'

class Admin extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
            notShipped: true,
            shipped: false,
            type: '',
            customer: ''
        }

        this.resetFilter = this.resetFilter.bind(this)
    }

    componentDidMount () {
        window.scrollTo( 0, 0 )

        // axios.get( '/api/products' ).then( response => {
        //     this.setState({
        //         products: response.data
        //     })
        // })
    }

    handleInputChange( e ) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name

        this.setState({
            [name]: value
        })
    }

    resetFilter() {
        document.getElementById('clear').value = ''


        this.setState({
            notShipped: true,
            shipped: false,
            type: '',
            customer: ''
        })
    }

    render() {
        return(
            <div>

                <div className='filter-box'>
                    <form id='clear'>
                        <input type='checkbox' name='notShipped' checked={this.state.notShipped} onChange={ e => this.handleInputChange( e ) } />Not Shipped
                    </form>
                    <form id='clear'>
                        <input type='checkbox' name='shipped' checked={this.state.shipped} onChange={ e => this.handleInputChange( e ) } />Shipped
                    </form>
                    <form id='clear'>
                        <select name='type' onChange={ e => this.handleInputChange( e ) } >
                            <option value=''>--Filter By--</option>
                            <option value='headband'>Headband</option>
                            <option value='flower'>Flower</option>
                            <option value='centerpiece'>Centerpiece</option>
                        </select>
                    </form>
                    <form id='clear'>
                        <input name='customer' placeholder='Customer Name' onChange={ e => this.handleInputChange( e ) } />
                    </form>
                    <button onClick={ this.resetFilter } >Clear filter</button>
                </div>

                {/* <div className='orders-box'>
                    { this.state.cart.map( ( cart, i ) => {
                        return(
                            ( cart[this.state.shipped]
                            ? <div key={i} className='account-cart-card'>
                                <div>{cart.type}</div>
                                <div>{cart.material}</div>
                                <div>{cart.baseColor}</div>
                                <div>{cart.decoration}</div>
                                <div>{cart.decoColor}</div>
                                <div>{cart.request}</div>
                            </div>
                            : console.log( 'Cannot display products' ) )
                        )
                    } ) }
                </div> */}
                
            </div>
        )
    }
}

export default Admin;