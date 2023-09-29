import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormShown, setFormShown] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const handleShowForm = (isShown = false) => {
    setFormShown(isShown);
  }

  return (
    <div className='new-expense'>
      {isFormShown && <ExpenseForm onShowForm={handleShowForm} onSaveExpenseData={saveExpenseDataHandler} />}
      {!isFormShown && <button onClick={() => handleShowForm(true)}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
