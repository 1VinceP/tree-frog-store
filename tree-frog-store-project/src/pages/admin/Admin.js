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

            users: []
        }

        this.resetFilter = this.resetFilter.bind(this)
    }

    componentDidMount () {
        window.scrollTo( 0, 0 )

        axios.get( '/api/products' ).then( response => {
            this.setState({
                products: response.data
            })
        })

        axios.get( '/api/all_users' ).then( response => {
            console.log('res:', response.data)
            this.setState({
                users: response.data
            })
        } )
    }

    handleInputChange( e ) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name

        this.setState({
            [name]: value
        })
        console.log( this.state.type )
    }

    resetFilter() {
        document.getElementById('clear').reset();

        this.setState({
            notShipped: true,
            shipped: false,
            type: ''
        })
    }

    markItemShipped( id, status ) {
        let body = {status}

        axios.put( '/api/update_shipped/' + id, body ).then( response => {

            axios.get( '/api/products' ).then( response => {
                this.setState({
                    products: response.data
                })
            })
        } )
    }

    render() {

        console.log( this.state.users )
        return(
            <div className='admin-body'>

                <div className='filter-box'>
                    <form id='clear'>
                        <input type='checkbox' name='notShipped' checked={this.state.notShipped} onChange={ e => this.handleInputChange( e ) } />Not Shipped
                    </form>
                    <form id='clear'>
                        <input type='checkbox' name='shipped' checked={this.state.shipped} onChange={ e => this.handleInputChange( e ) } />Shipped
                    </form>
                    {/* <form id='clear'>
                        <select name='type' onChange={ e => this.handleInputChange( e ) } >
                            <option value=''>--Filter By--</option>
                            <option value='headband'>Headband</option>
                            <option value='flower'>Flower</option>
                            <option value='centerpiece'>Centerpiece</option>
                        </select>
                    </form> */}
                    {/* <form id='clear'>
                        <input name='customer' placeholder='Customer Name' onChange={ e => this.handleInputChange( e ) } />
                    </form> */}
                    {/* <button className='reset-filter-button' onClick={ this.resetFilter } >Reset filter</button> */}
                </div>

                { this.state.notShipped ?
                <div className='orders-box'>
                    <h2>Not Shipped</h2>
                    <br/>
                    { this.state.products.map( ( products, i ) => {
                        return(
                            <div key={i}>
                                { this.state.notShipped && products.paid && !products.shipped
                                ? <div key={i} className={ 'admin-product-card ' + ( products.type === 'headband' ? 'pink-border' : products.type === 'flower' ? 'yellow-border' : 'blue-border' ) }>
                                    <div className={ 'admin-order-header ' + ( products.type === 'headband' ? 'pink-header' : products.type === 'flower' ? 'yellow-header' : 'blue-header' ) }><b>{products.type.toUpperCase()}</b></div>
                                    <div><b>Material</b>: {products.material}</div>
                                    <div><b>Base</b>: {products.basecolor}</div>
                                    <div><b>Decoration</b>: {products.decoration}</div>
                                    <div><b>DecoColor</b>: {products.decocolor}</div>
                                    <div><b>Request</b>: {products.request}</div>
                                    <button className='shipped-button' onClick={ () => this.markItemShipped( products.id, true ) } ><b>Shipped!</b></button>
                                    <div>
                                        { this.state.users.map( ( user, i ) => {
                                            {/* user.id === products.creatorid */}
                                            return (
                                                <div key={i}>
                                                    { user.id === products.creatorid
                                                        ? <div className='admin-show-address'>
                                                            <div><u>{user.username}</u></div>
                                                            <div>{user.email}</div>
                                                            <div>{user.street1}</div>
                                                            { user.street2 ? <div>{user.street2}</div> : null }
                                                            <div>{user.city}, {user.state} {user.zip}</div>
                                                        </div>
                                                        : null }
                                                </div>
                                            )
                                        } ) }
                                    </div>
                                </div>
                                : null }
                            </div>
                        )
                    } ) }
                </div>
                : null }

                { this.state.shipped ?
                    <div className='orders-box'>
                        <h2>Shipped</h2>
                        <br/>
                        { this.state.products.map( ( products, i ) => {
                            return(
                                <div key={i}>
                                    { this.state.shipped && products.paid && products.shipped
                                    ? <div key={i} className={ 'admin-product-card ' + ( products.type === 'headband' ? 'pink-border' : products.type === 'flower' ? 'yellow-border' : 'blue-border' ) }>
                                    <div className={ 'admin-order-header ' + ( products.type === 'headband' ? 'pink-header' : products.type === 'flower' ? 'yellow-header' : 'blue-header' ) }><b>{products.type.toUpperCase()}</b></div>
                                        <div><b>Material</b>: {products.material}</div>
                                        <div><b>Base</b>: {products.basecolor}</div>
                                        <div><b>Decoration</b>: {products.decoration}</div>
                                        <div><b>DecoColor</b>: {products.decocolor}</div>
                                        <div><b>Request</b>: {products.request}</div>
                                        <button className='unship-button' onClick={ () => this.markItemShipped( products.id, false ) } ><b>JK, not shipped</b></button>
                                        <div>
                                        { this.state.users.map( ( user, i ) => {
                                            {/* user.id === products.creatorid */}
                                            return (
                                                <div key={i}>
                                                    { user.id === products.creatorid
                                                        ? <div className='admin-show-address'>
                                                            <div><u>{user.username}</u></div>
                                                            <div>{user.email}</div>
                                                            <div>{user.street1}</div>
                                                            { user.street2 ? <div>{user.street2}</div> : null }
                                                            <div>{user.city}, {user.state} {user.zip}</div>
                                                        </div>
                                                        : null }
                                                </div>
                                            )
                                        } ) }
                                    </div>
                                    </div>
                                    : null }
                                </div>
                            )
                        } ) }
                    </div>
                : null }
                
            </div>
        )
    }
}

export default Admin;