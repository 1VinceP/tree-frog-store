import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

    render(){
        return(
            <div className='footer'>
                <div className='contact'>
                    <div><b>Contact Rebecca</b></div>
                    {/* /////////////////////////// CHANGE EMAIL ADDRESS FOR PRODUCTION */}
                    <a href='mailto:treefrogsreb@email.com' ><div className='contact-info'># placeholderemail@email.com #</div></a>
                </div>
                <div className='credits'>
                    <div className='copyright'>&copy; Vincent Palmer 2017</div>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel='noopener noreferrer'>CC 3.0 BY</a></div>
                </div>
            </div>
        )
    }
}

export default Footer;