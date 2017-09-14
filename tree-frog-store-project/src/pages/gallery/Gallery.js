import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './gallery.css';


class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            galleryImg: [{}]
        }
    }
    
    componentDidMount() {
        window.scrollTo( 0, 0 )

        axios.get( '/api/gallery' ).then( response => {
            console.log( response.data )
            this.setState({
                galleryImg: response.data.map( e => {
                    return e.imgurl
                })
            })
        })
        console.log( this.state.gallery )
    }

    render() {

        console.log( this.props.match.path )
        return(
            <div className='gallery-body'>
                <h1>This is our Gallery!</h1>
                <p>Here you will find many examples of what can be made, but this is certainly not a finite list. Hop on over to our <Link to='/custom-order'>custom order</Link> page to see the plethora of available options.</p>

                <img src={ this.state.galleryImg[0] } />
                <img src={ this.state.galleryImg[1] } />
                
            </div>
        )
    }
}

export default Gallery;