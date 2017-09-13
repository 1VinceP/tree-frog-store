import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './customOrder.css';
import { getOrderType, getOrderMaterial, getOrderBaseColor, getOrderSecondaryColor, getOrderDecoration, getOrderDecoColor, getOrderRequest } from '../../ducks/reducer';

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
            orderRequest: ''
        }

        this.confirms = this.confirms.bind(this);
    }

    componentDidMount() {
        window.scrollTo( 0, 0 )
    };

    handleInputChangeP( e ) {
        let value = e.target.value
        let name = e.target.name

        this.setState({
            orderType: value
        })
        console.log( this.state.orderType )
    };

    confirms( orderType) {
        // const { orderType, orderMaterial, orderBaseColor, orderSecondaryColor, orderDecoration, orderDecoColor, orderRequest} = this.state

        function setType( orderType1 ) {
            orderType1 => getOrderType( orderType1 )
        }
        setType( orderType );

        console.log( this.props.orderType );
        alert('Your item has been added to the cart!');
    };

    resetSelections() {
        if( window.confirm( 'Are you sure you want to clear your selections?' ) )
            document.getElementById("orderForm").reset();
    };

    render() {

        const { getOrderType, getOrderMaterial, getOrderBaseColor, getOrderSecondaryColor, getOrderDecoration, getOrderDecoColor, getOrderRequest } = this.props;

        return(
            <div className='order-body'>

                
                <div className='order-div'>

                    <div className='image-display'>
                        { this.state.type === 'headband' && this.state.decoration === 'butterfly' ? <img src='https://photos-2.dropbox.com/t/2/AADFz574Y9bpZ60sXu-F-xH0Aha_b3Ri_DJhc88firHPHg/12/632623851/jpeg/32x32/1/_/1/2/DSCF9125.JPG/EMiZ0eAFGDYgBygH/Shs4Pjg5VDm0tnoCbQUYShCFd9A_sF7RwoOrjT5F3xA?size=1280x960&size_mode=3' />
                        : this.state.type === 'headband' && this.state.decoration === 'rose' ? <img src="https://photos-6.dropbox.com/t/2/AAAnbmQAuI8lm0dKVMLw5PywLR5AV2QwAGYWfhsG53sY-g/12/632623851/jpeg/32x32/1/_/1/2/DSCF9129.JPG/EMiZ0eAFGDYgBygH/V60MDm2dVDuvblDGLYgHKZ0BBCVOK7IFsEzYT_Sz5K8?size=1280x960&size_mode=3" />
                        : null }
                    </div>

                    <form className='form-content' id='orderForm'>
                        <p>Product Type: </p>
                        <select name='type' onChange={ e => this.handleInputChangeP(e) }>
                            <option value=''>--Select a style--</option>
                            <option value='headband'>Headband</option>
                            <option value='flower'>Flower</option>
                            <option value='centerpiece'>Centerpiece</option>
                        </select>
                        <br/>
                        <p>Material: </p>
                        <select name='material' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a material--</option>
                            <option value='ribbon'>Ribbon</option>
                            <option value='lace'>Lace</option>
                        </select>
                        <br/>
                        <p>Base Color: </p>
                        <select name='baseColor' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a color--</option>
                            <option value='pink'>Pink</option>
                            <option value='sky-blue'>Sky Blue</option>
                            <option value='lime-green'>Lime Green</option>
                        </select>
                        <br/>
                        <p>Decoration: </p>
                        <select name='decoration' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a decoration type--</option>
                            <option value='rose'>Rose</option>
                            <option value='other-flower'>Other Flower</option>
                            <option value='butterfly'>Butterfly</option>
                        </select>
                        <br/>
                        <p>Decoration Color: </p>
                        <select name='decoColor' onChange={ e => this.handleInputChange(e) }>
                            <option value=''>--Select a color--</option>
                            <option value='pink'>Pink</option>
                            <option value='sky-blue'>Sky Blue</option>
                            <option value='lime-green'>Lime Green</option>
                            <option value='purple'>Purple</option>
                        </select>
                        <br/>
                        <p>Additional comments: </p>
                        <textarea name='request' onChange={ e => this.handleInputChange(e) }/>
                    </form>

                </div>

                <button className='submit-order-button' onClick={ this.confirms }>Submit Item to Cart</button>
                <button className='clear-button' onClick={this.resetSelections}>Clear Selections</button>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { orderType, orderMaterial, orderBaseColor, orderSecondaryColor, orderDecoration, orderDecoColor, orderRequest } = state;

    return {
        orderType,
        orderMaterial,
        orderBaseColor,
        orderSecondaryColor,
        orderDecoration,
        orderDecoColor,
        orderRequest
    };
}

export default connect( mapStateToProps, { getOrderType, getOrderMaterial, getOrderBaseColor, getOrderSecondaryColor, getOrderDecoration, getOrderDecoColor, getOrderRequest } )( CustomOrder );