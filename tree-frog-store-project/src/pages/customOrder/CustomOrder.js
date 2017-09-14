import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { attributeDescription } from '../../components/textCleanup/TextCleanup';
import './customOrder.css';

class CustomOrder extends Component {
    constructor() {
        super();

        this.state = {
            orderType: '',
            orderMaterial: '',
            orderBaseColor: '',
            orderSecondaryColor: '',
            orderDecoration: '',
            orderDecoColor: '',
            orderCenterBase: '',
            orderCenterCandle: '',
            orderRequest: '',

            user: false,
        }

        this.submitOrder = this.submitOrder.bind(this);
        this.resetSelections = this.resetSelections.bind(this)
    }

    componentDidMount() {
        window.scrollTo( 0, 0 )

        // const { getUser } = this.props;
        // this.setState( {user: getUser()} )

        axios.get( '/api/user' ).then( user => {
            if( user.data.username !== undefined ) {
                this.setState({
                    user: true
                })
            }
        })
        
        console.log( 'user:', this.state.user )
    };

    handleInputChange( e ) {
        let value = e.target.value
        let name = e.target.name

        this.setState({
            [name]: value
        })
        console.log( 'type:', this.state.orderType )
    };

    submitOrder() {
        alert('Please go to your cart to purchase your item(s)')
    };

    resetSelections() {
        if( window.confirm( 'Are you sure you want to clear your selections?' ) ) {
            document.getElementById("orderForm").reset();
            this.setState({
                orderType: '',
                orderMaterial: '',
                orderBaseColor: '',
                orderSecondaryColor: '',
                orderDecoration: '',
                orderDecoColor: '',
                orderCenterBase: '',
                orderRequest: ''
            })
        }
    };

    countChar() {
        let limit = 300;

        return limit - this.state.orderRequest.length
    }

    render() {
        

        return(
            <div className='order-body'>

                {/* Displays a banner prompting the user to log in so they can place an order */}
                { !this.state.user 
                    ? <section className='log-in-banner'>
                        <p>Please <a href={ process.env.REACT_APP_LOGIN } className='mini-login-link' >Log In</a> to place an order</p>
                    </section>
                    : null
                }
                
                <div className='order-div'>
                    <p className='order-header'>Please specify directions for each attribute marked with a star (*) in the comments section
                        <hr/>
                        <p className='show-him'><i>Hover over me for more info on each attribute</i>
                        <div className='show-me'>
                            { attributeDescription() }
                        </div></p>
                    </p>
                    
                    <br/>

                    <form className='form-content' id='orderForm'>
                        <p>Product Type: </p>
                        <select name='orderType' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a style--</option>
                            <option value='headband'>Headband</option>
                            <option value='flower'>Flower</option>
                            <option value='centerpiece'>Centerpiece</option>
                        </select>
                        <br/>
                        <p>Material: </p>
                        <select name='orderMaterial' onChange={ e => this.handleInputChange(e) }>
                            {/* <option value=''>--Select a material--</option> */}
                            <option value='ribbon'>Ribbon</option>
                        </select>
                        <br/>
                        <p>Base Color: </p>
                        <select name='orderBaseColor' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a color--</option>
                            <option value='black'>Black</option>
                            <option value='brown'>Brown</option>
                            <option value='cream'>Cream</option>
                            <option value='navy-blue'>Navy Blue</option>
                            <option value='orange'>Orange</option>
                            <option value='white'>White</option>
                        </select>
                        <br/>
                        <p>Secondary Color: </p>
                        <select name='orderSecondaryColor' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a color--</option>
                            <option value='black'>Black</option>
                            <option value='brown'>Brown</option>
                            <option value='cream'>Cream</option>
                            <option value='navy-blue'>Navy Blue</option>
                            <option value='orange'>Orange</option>
                            <option value='white'>White</option>>
                        </select>
                        <br/>
                        <p>Decoration: </p>
                        <select name='orderDecoration' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a decoration type--</option>
                            { this.state.orderType !== 'flower'
                                ? <option value='rose'>Rose</option>
                                : <option value='pearl'>Pearl</option>
                            }
                            { this.state.orderType !== 'flower'
                                ? <option value='butterfly'>Butterfly</option>
                                : <option value='jewel'>Jewel</option>
                            }
                            <option value='other-flower'>Other* Flower</option>
                        </select>
                        <br/>
                        <p>Decoration Color: </p>
                        <select name='orderDecoColor' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a color--</option>
                            <option value='black'>Black</option>
                            <option value='brown'>Brown</option>
                            <option value='cream'>Cream</option>
                            <option value='navy-blue'>Navy Blue</option>
                            <option value='orange'>Orange</option>
                            <option value='white'>White</option>
                        </select>
                        { this.state.orderType === 'centerpiece'
                            ? <div>
                                <br/>
                                <p>Centerpiece Base: </p>
                                <select name='orderCenterBase' onChange={ e => this.handleInputChange(e) }>
                                    <option value=''>--Select a decoration type--</option>
                                    <option value='round-mirror'>Round Mirror</option>
                                    <option value='square-mirror'>Square Mirror</option>
                                    <option value='round-wood'>Round Wood</option>
                                    <option value='square-wood'>Square Wood</option>
                                    <option value='round-tile'>Round Tile</option>
                                    <option value='square-tile'>Square Tile</option>
                                </select>
                             </div>
                            : null
                        }
                        { this.state.orderType === 'centerpiece'
                            ? <div>
                                <br/>
                                <p>Centerpiece Candle: </p>
                                <select name='orderCenterCandle' onChange={ e => this.handleInputChange(e) }>
                                    <option value=''>--Select a decoration type--</option>
                                    <option value='enclosed'>Enclosed</option>
                                    <option value='open-tall'>Tall and Open</option>
                                </select>
                             </div>
                            : null
                        }
                        <br/>
                        <p>Additional comments: </p>
                        <textarea name='orderRequest' maxLength='300' onChange={ e => this.handleInputChange(e) }/>
                        <div className='character-limit'>Characters: {this.countChar()}</div>
                    </form>

                </div>

                <div className='image-display'>
                    <h3>Product Preview</h3>
                    <p>*This is an example of what your product might look like, but may not be exact due to your specifications and our database*</p>
                        { this.state.orderType === 'headband' && this.state.orderDecoration === 'butterfly' ? <img src='https://photos-2.dropbox.com/t/2/AADFz574Y9bpZ60sXu-F-xH0Aha_b3Ri_DJhc88firHPHg/12/632623851/jpeg/32x32/1/_/1/2/DSCF9125.JPG/EMiZ0eAFGDYgBygH/Shs4Pjg5VDm0tnoCbQUYShCFd9A_sF7RwoOrjT5F3xA?size=1280x960&size_mode=3' />
                        : this.state.orderType === 'headband' && this.state.orderDecoration === 'rose' ? <img src="https://photos-6.dropbox.com/t/2/AAAnbmQAuI8lm0dKVMLw5PywLR5AV2QwAGYWfhsG53sY-g/12/632623851/jpeg/32x32/1/_/1/2/DSCF9129.JPG/EMiZ0eAFGDYgBygH/V60MDm2dVDuvblDGLYgHKZ0BBCVOK7IFsEzYT_Sz5K8?size=1280x960&size_mode=3" />
                        : null }
                </div>
                
                {/* { this.state.user
                    ? <button className='submit-order-button' onClick={ this.submitOrder }>Submit Item to Cart</button>
                    : null
                } */}
                <button className='submit-order-button' onClick={ this.submitOrder }>Submit Item to Cart</button>
                
                <button className='clear-button' onClick={this.resetSelections}>Clear Selections</button>
            </div>
        )
    }
}

export default CustomOrder;