import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';


class Store extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    
    componentDidMount() {
        window.scrollTo( 0, 0 )
    }

    render() {

        console.log( this.props.match.path )
        return(
            <div className='gallery-body'>
                <h1>This is our Gallery!</h1>
                <p>Here you will find many examples of what can be made, but this is certainly not a finite list. Hop on over to our <Link to='/custom-order'>custom order</Link> page to see the plethora of available options.</p>
                <img src='https://photos-2.dropbox.com/t/2/AADFz574Y9bpZ60sXu-F-xH0Aha_b3Ri_DJhc88firHPHg/12/632623851/jpeg/32x32/1/_/1/2/DSCF9125.JPG/EMiZ0eAFGDYgBygH/Shs4Pjg5VDm0tnoCbQUYShCFd9A_sF7RwoOrjT5F3xA?size=1280x960&size_mode=3' />
                <img src="https://photos-6.dropbox.com/t/2/AAAnbmQAuI8lm0dKVMLw5PywLR5AV2QwAGYWfhsG53sY-g/12/632623851/jpeg/32x32/1/_/1/2/DSCF9129.JPG/EMiZ0eAFGDYgBygH/V60MDm2dVDuvblDGLYgHKZ0BBCVOK7IFsEzYT_Sz5K8?size=1280x960&size_mode=3" />
                
            </div>
        )
    }
}

export default Store;