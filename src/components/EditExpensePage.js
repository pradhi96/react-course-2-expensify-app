import React from 'react';
import { BrowserRouter,Route,Switch,Link,NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense , removeExpense} from '../actions/expenses';
const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                expense = {props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id,expense));
                    props.history.push('/');
                }}
            />
            <button onClick={()=>{
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}> Remove </button>
        </div>
    );
};

// Remove expense via dispatch and then redirect to dashboard

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => 
            expense.id === props.match.params.id)
    };

    
    
};

export default connect(mapStateToProps) (EditExpensePage);
