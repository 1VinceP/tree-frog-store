import React, { Component } from 'react'
import './sideNav.css'
import { Link } from 'react-router-dom';
require('dotenv').config();


class SideNav extends Component {

    render() {

        let cartAmount = 0
        console.log( this.props.displayMenu )
        return(
            <div className={ 'mobile-menu-container ' + (this.props.displayMenu ? 'show' : null) }>
                <div className='menu-header'>
                    <div>Welcome{`${''}`}!</div>
                    <button className='close-button' onClick={ () => this.props.toggleMenu() }>&#10006;</button>
                </div>

                <a href={ process.env.REACT_APP_LOGIN } className='decor' ><div className='nav-tabs' id='login'>Log in</div></a>
                <Link to='/' className='link' onClick={ () => this.props.toggleMenu() }><div className='nav-tabs'>Home</div></Link>
                <Link to='/gallery' className='link' onClick={ () => this.props.toggleMenu() }><div className='nav-tabs'>Gallery</div></Link>
                <Link to='/cart' className='link' onClick={ () => this.props.toggleMenu() }><div className='nav-tabs'>Cart ({`${cartAmount}`})</div></Link>                
                <Link to='/about' className='link' onClick={ () => this.props.toggleMenu() }><div className='nav-tabs'>About</div></Link>
            </div>
        )
    }
}

export default SideNav;