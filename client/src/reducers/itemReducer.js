import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: Object.assign(...state, action.payload),
                loading: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => (item.id !== action.payload)),
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [ ...state.items, action.payload]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}