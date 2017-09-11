import React, { Component } from 'react'
import './gallery.css'


class Store extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {

        console.log( this.props.match.path )
        return(
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum finibus ullamcorper. Curabitur sed porttitor elit. In hac habitasse platea dictumst. Aenean ut lorem vulputate urna tempor laoreet ut vel tellus. Duis in quam consectetur, lacinia libero vehicula, vehicula arcu. Pellentesque sit amet venenatis sapien, venenatis porttitor neque. Duis tincidunt accumsan nibh, eleifend consequat nunc dictum vitae. Aenean semper, lectus a pellentesque hendrerit, ligula eros elementum erat, et rutrum augue nisi et est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                
            </div>
        )
    }
}

export default Store;