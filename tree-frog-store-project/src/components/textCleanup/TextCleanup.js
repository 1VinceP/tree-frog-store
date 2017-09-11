import React from 'react';
import './textCleanup.css';
import { Link } from 'react-router-dom';

export function description() {
    return(
        <div>
            <i>Kanzashi</i> are a traditional style of personal decoration that encapsulates a wide variety of designs and materials.<br/><br/>
            The <i>Kanzashi flower</i> is an intricate design of material (generally silk or ribbon) that is folded into the shape of a flower.
        </div>
    )
}

export function homeBody() {
    return(
        <div>
            <p>Here at Tree Frog Productions, we are dedicated to producing the finest Kanzashi in America. All of our products are custom made to order, and we only use the finest of materials to ensure quality and longevity.</p>
            <Link to='/store'><button className='store-button'>Gallery</button></Link>

            <br/>
            <p>Rebecca has been making Kanzashi for weddings and other events since Christmastime of 2016.</p>
            <Link to='/about'><button className='about-button'>Learn more</button></Link>
        </div>
    )
}