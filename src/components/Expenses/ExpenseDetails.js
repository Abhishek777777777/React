import './ExpenseItem.css';
import React from 'react';
const ExpenseDetails = (props) => {
    return (
        <div className="expense-items__description">
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className="expense-items__price">${props.amount}</div>
            
        </div>
    )
}

export default ExpenseDetails;