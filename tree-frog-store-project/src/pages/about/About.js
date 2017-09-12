import React, { Component } from 'react'
import { aboutBody } from '../../components/textCleanup/TextCleanup';
import './about.css'

class About extends Component {
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
            <div>
                {/* <div className='buffer'></div> */}
                <div className='about-hero'/>
                <div className='body'>
                    <div className='about-info'>{ aboutBody() }</div>
                </div>
            </div>
        )
    }
}

export default About;