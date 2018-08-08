import { uuid } from 'uuid';
import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        {id: 0, name: "Eggs"},
        {id: 1, name: "milk"},
        {id: 2, name: "bread"},
        {id: 3, name: "cheese"},
    ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => (item.id !== action.payload))
            }
        case ADD_ITEM:
        return {
            ...state,
            items: [ ...state.items, action.payload]
        }
        default:
            return state
    }
}