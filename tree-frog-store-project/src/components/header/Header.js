import React, { Component } from 'react';
import './header.css';
// import logo from '../../TFR.png';
import hamMenu from '../../images/ham-menu.svg';
import { Link } from 'react-router-dom';

// import SideNav from './SideNav';

class Header extends Component {

    render() {

    // console.log( this.props.match )
        return(
            <div>
                <div className='header'>
                    <div className='side-nav-toggle' onClick={ () => this.props.toggleMenu() }><img src={hamMenu} className='ham-menu' alt='' /></div>
                    <Link to='/' className='link'><div className='header-title'>Kanzashi</div></Link>
                </div>
            </div>
        )
    }
}

export default Header;