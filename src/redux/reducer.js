import {ADD_BALANCE, ADD_EDIT_BALANCE, DELETE_BALANCE, EDIT_BALANCE} from './types';

const initialState = {
    transaction: [
    { id: 1, text: 'Toys', amount: -20, update: false },
    { id: 2, text: 'Salary', amount: 300, update: false },
    { id: 3, text: 'Food', amount: -10.99, update: false },
    { id: 4, text: 'Iphone', amount: 899, update: false }
  ]
//   editBalance: {}
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BALANCE: return {
            ...state,
            transaction: [action.payload, ...state.transaction]
        }
        case DELETE_BALANCE: return {
            ...state,
            transaction: state.transaction.filter((value) => (value.id !== action.payload))
        }
        // case ADD_EDIT_BALANCE: return {
        //     ...state,
        //     editBalance: action.payload
        // }
        case EDIT_BALANCE:
            // let updateItem = state.transaction.filter((item) => item.id === action.payload.id)
            // console.log(updateItem)
            let updateSomething = state.transaction.map((item) => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        text: action.payload.text,
                        amount: action.payload.amount
                    }
                } return item
            })

            console.log(updateSomething)

        return {
            ...state,
            transaction: updateSomething

        }
        default: return state;
    };
};

export default reducer;