import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // My version
  // const [isFormShown, setFormShown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  //My version
  // const handleShowForm = (isShown = false) => {
  //   setFormShown(isShown);
  // }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}


      {/* My version */}
      {/* {isFormShown && <ExpenseForm onShowForm={handleShowForm} onSaveExpenseData={saveExpenseDataHandler} />}
      {!isFormShown && <button onClick={() => handleShowForm(true)}>Add New Expense</button>} */}
    </div>
  );
};

export default NewExpense;
