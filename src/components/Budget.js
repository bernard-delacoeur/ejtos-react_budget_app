import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const MAX_BUDGET = 20000;

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(event.target.value > MAX_BUDGET) {
            alert("The value cannot exceed the maximum budget of £" + MAX_BUDGET);
            return;
        }
        if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value to less than Spent so far");
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
