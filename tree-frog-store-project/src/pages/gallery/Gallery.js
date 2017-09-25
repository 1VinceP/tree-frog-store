import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './gallery.css';


class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            gallery: []
        }
    }
    
    componentDidMount() {
        window.scrollTo( 0, 0 )

        axios.get( '/api/products' ).then( response => {
            console.log( response.data )
            this.setState({
                 gallery: response.data
                })
            })
        console.log( this.state.gallery )
    }

    render() {

        return(
            <div className='gallery-body'>
                <h1>This is our Gallery!</h1>
                <p>Here you will find many examples of what can be made, but this is certainly not a finite list. Hop on over to our <Link to='/custom-order'>custom order</Link> page to see the plethora of available options.</p>

                <div className='img-card'>
                    <h2>Headbands</h2>
                    { this.state.gallery.map( ( gal, i ) => {
                        return(
                                ( gal.imgurl && gal.type === 'headband'
                                ? <div key={i}>
                                    <img src={gal.imgurl} alt='' />
                                </div>
                                : null )
                        )
                    } ) }
                </div>

                <div className='img-card'>
                    <h2>Flowers</h2>
                    { this.state.gallery.map( ( gal, i ) => {
                        return(
                                ( gal.imgurl && gal.type === 'flower'
                                ? <div key={i}>
                                    <img src={gal.imgurl} alt='' />
                                </div>
                                : null )
                        )
                    } ) }
                </div>

                <div className='img-card'>
                    <h2>Centerpieces</h2>
                    { this.state.gallery.map( ( gal, i ) => {
                        return(
                                ( gal.imgurl && gal.type === 'centerpiece'
                                ? <div key={i}>
                                    <img src={gal.imgurl} alt='' />
                                </div>
                                : null )
                        )
                    } ) }
                </div>
                
            </div>
        )
    }
}

export default Gallery;