import React, { Component } from 'react';
import './home.css';
import { description, homeBody } from '../../components/textCleanup/TextCleanup';

class Home extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() {
        window.scrollTo( 0, 0 )
    }

    render() {
        return(
            <div className='home-front'>
                <div className='hero'></div>

                <div className='home-info'>{ description() }</div>
                <div className='home-body'>{ homeBody() }</div>
            </div>
        )
    }
}

export default Home;