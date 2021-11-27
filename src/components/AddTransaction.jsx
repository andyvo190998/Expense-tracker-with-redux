import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBalance } from '../redux/actions';

const AddTransaction = ({ openUpdate, setOpenUpdate, updateObject, setUpdateObject }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const handleText = (e) => {
        setText(() => e.target.value);
    };

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    const addTransaction = (e) => {
        e.preventDefault();
        if (text === '') {
            alert('Please enter text ....')
        } else {
            const transaction = {
                id: Math.floor(Math.random() * 1000),
                text: text,
                amount: +amount
            }
            dispatch(addBalance(transaction));
            setText('');
            setAmount(0);
        }

    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value={text} onChange={handleText} type="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input value={amount} onChange={handleAmount} type="number" placeholder="Enter amount..." />
                </div>
                <button onClick={addTransaction} className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
