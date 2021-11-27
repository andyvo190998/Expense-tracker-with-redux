import {ADD_BALANCE, ADD_EDIT_BALANCE, DELETE_BALANCE, EDIT_BALANCE} from './types';


export const addBalance = (amount = 1) => {
    console.log(amount)
    return {
        type: ADD_BALANCE,
        payload: amount
    }
};

export const deleteBalance = (id) => {
    return {
        type: DELETE_BALANCE,
        payload: id
    }
};
export const editBalance = (object) => {
    return {
        type: EDIT_BALANCE,
        payload: object
    }
}

export const addEditBalance = (object) => {
    return {
        type: ADD_EDIT_BALANCE,
        payload: object
    }
}