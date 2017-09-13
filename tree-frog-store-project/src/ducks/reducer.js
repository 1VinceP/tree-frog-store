const initialState = {
    orderType: '',
    orderMaterial: '',
    orderBaseColor: '',
    orderSecondaryColor: '',
    orderDecoration: '',
    orderDecoColor: '',
    orderRequest: ''
}

const UPDATE_ORDER_TYPE = 'UPDATE_ORDER_TYPE'
const UPDATE_ORDER_MATERIAL = 'UPDATE_ORDER_MATERIAL'
const UPDATE_ORDER_BACE_COLOR = 'UPDATE_ORDER_BACE_COLOR'
const UPDATE_ORDER_SECONDARY_COLOR = 'UPDATE_ORDER_SECONDARY_COLOR'
const UPDATE_ORDER_DECORATION = 'UPDATE_ORDER_DECORATION'
const UPDATE_ORDER_DECO_COLOR = 'UPDATE_ORDER_DECO_COLOR'
const UPDATE_ORDER_REQUEST = 'UPDATE_ORDER_REQUEST'

export function getOrderType( orderType ) {
    return {
        type: UPDATE_ORDER_TYPE,
        payload: orderType
    }
};

export function getOrderMaterial( orderMaterial ) {
    return {
        type: UPDATE_ORDER_MATERIAL,
        payload: orderMaterial
    }
};

export function getOrderBaseColor( orderBaseColor ) {
    return {
        type: UPDATE_ORDER_BACE_COLOR,
        payload: orderBaseColor
    }
};

export function getOrderSecondaryColor( orderSecondaryColor ) {
    return {
        type: UPDATE_ORDER_SECONDARY_COLOR,
        payload: orderSecondaryColor
    }
};

export function getOrderDecoration( orderDecoration ) {
    return {
        type: UPDATE_ORDER_DECORATION,
        payload: orderDecoration
    }
};

export function getOrderDecoColor( orderDecoColor ) {
    return {
        type: UPDATE_ORDER_DECO_COLOR,
        payload: orderDecoColor
    }
};

export function getOrderRequest( orderRequest ) {
    return {
        type: UPDATE_ORDER_REQUEST,
        payload: orderRequest
    }
};

function reducer( state = initialState, action ) {
    switch( action.type ) {
        case UPDATE_ORDER_TYPE:
            return Object.assign( {}, state, { orderType: action.payload });
        case UPDATE_ORDER_BACE_COLOR:
            return Object.assign( {}, state, { orderBaseColor: action.payload });
        case UPDATE_ORDER_SECONDARY_COLOR:
            return Object.assign( {}, state, { orderSecondaryColor: action.payload });
        case UPDATE_ORDER_DECORATION:
            return Object.assign( {}, state, { orderDecoration: action.payload });
        case UPDATE_ORDER_DECO_COLOR:
            return Object.assign( {}, state, { orderDecoColor: action.payload });
        case UPDATE_ORDER_REQUEST:
            return Object.assign( {}, state, { orderRequest: action.payload });

        default: return state;
    }
}

export default reducer;