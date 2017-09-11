import React, { Component } from 'react'
import './about.css'

class About extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div>
                {/* <div className='buffer'></div> */}
                <div className='about-hero'/>
                <div className='body'>
                    <div className='about-info'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum finibus ullamcorper. Curabitur sed porttitor elit. In hac habitasse platea dictumst. Aenean ut lorem vulputate urna tempor laoreet ut vel tellus. Duis in quam consectetur, lacinia libero vehicula, vehicula arcu. Pellentesque sit amet venenatis sapien, venenatis porttitor neque. Duis tincidunt accumsan nibh, eleifend consequat nunc dictum vitae. Aenean semper, lectus a pellentesque hendrerit, ligula eros elementum erat, et rutrum augue nisi et est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </div>
                </div>
            </div>
        )
    }
}

export default About;