import React from 'react';
import './textCleanup.css';
import { Link } from 'react-router-dom';

// Home Page
export function description() {
    return(
        <div>
            <i>Kanzashi</i> are a traditional style of personal decoration that encapsulates a wide variety of designs and materials.<br/><br/>
            The <i>Kanzashi flower</i> is an intricate design of material (generally silk or ribbon) that is folded into the shape of a flower.
        </div>
    )
}

// Home Page
export function homeBody() {
    return(
        <div>
            <p>Here at Tree Frog Productions, we are dedicated to producing the finest Kanzashi in America. All of our products are custom made to order, and we only use the finest of materials to ensure quality and longevity. View some of our creations in the Gallery</p>
            <Link to='/gallery'><button className='home-buttons' id='store-button'>Gallery</button></Link>

            <br/>
            <p>We love to keep it simple! Every product costs you exactly <b>$12</b>, unless you order in bulk. Orders of 15 or more cost only <b>$9 per item</b>. Every product is made custom to order, so you can head on over to our customization page and tell us what you would like!</p>
            <Link to='/custom-order'><button className='home-buttons' id='custom-order-button'>Customize your order</button></Link>

            <br/>
            <p className='small-about'>Rebecca has been making Kanzashi for weddings and other events since Christmastime of 2016.</p>
            <Link to='/about' className='small-about'><button className='home-buttons' id='about-button'>Learn more</button></Link>
        </div>
    )
}

// About Page
export function aboutBody() {
    return(
        <div className='about-page'>

            <div className='about-top'>
                <img className='about-image' src='https://photos-3.dropbox.com/t/2/AABwOn5BQuMDDP1XDPJnVO9X4y4gDdsApRbQeefZ-e27ow/12/632623851/jpeg/32x32/1/_/1/2/Rebecca%20Profile%20Pic.jpg/EMiZ0eAFGPMBIAcoBw/EyB-cSaN6xtL2QOgtFULyd0BXxgyWV-x4o7jDliYYEw?size=1280x960&size_mode=3' alt=''/>

                <h1 className='about-header'>Meet Rebecca Palmer!</h1>
            </div>
            

            <div className='about-info'>
                <p>Her journey began at the close of the year of 2016. A dear friend was getting married, but weddings are expensive!</p>

                <br/>
                <p>Rebecca took it upon herself to learn the art of Kanzashi, and created amazing centerpieces for the reception. Since then she has created many more pieces for friends, family, and strangers alike.</p>
                
                <br/>
                <p>She feels that its now time to extend her artwork out to the world, so that others can have beautiful wedding decorations at a manageable cost.</p>
            </div>
            
        </div>
    )
}

// Custom Order Page
export function attributeDescription() {
    return(
        <div>
            <br/>
            <p><b>Product Type:</b><br/>This is the big picture</p><br/>
            <p><b>Material:</b><br/>What it's made out of. Currently only ribbon</p><br/>
            <p><b>Base Color:</b><br/>The most prominent color</p><br/>
            <p><b>Secondary Color:</b><br/>The accent color</p><br/>
            <p><b>Decoration:</b><br/>An addition flair</p><br/>
            <p><b>Decoration Color:</b><br/>The color of the decoration</p><br/>
            <p><b>Centerpiece Candle:</b><br/>The candle design (if any)</p><br/>
            <p><b>Centerpiece Base</b><br/>The type of base for the centerpiece</p><br/>
        </div>
    )
}