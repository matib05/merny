import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    fetch('http://localhost:5000/api/items/')
        .then(res => {
            return res.json()
        })
        .then(data => {
            dispatch({
                type: GET_ITEMS,
                payload: data
            })
        })
}

export const deleteItem = (_id) => dispatch => {
    dispatch(setItemsLoading());
    fetch(`http://localhost:5000/api/items/${_id}`, {method: 'DELETE'})
    .then(res => {
        return res.json()
    })
    .then(data => {
        dispatch({
            type: DELETE_ITEM,
            payload: data
        })
    })
    .then(() => {
        dispatch(getItems())
    })
}

export const addItem = (item) => dispatch => {
    dispatch(setItemsLoading());
    fetch(`http://localhost:5000/api/items`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(res => {
        return res.json();   
    })
    .then(data => {
        dispatch({
            type: ADD_ITEM,
            payload: data
        })
    })
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}