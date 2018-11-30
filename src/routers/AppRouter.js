import React from 'react';
import { BrowserRouter,Route,Switch,Link,NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import Header from '../components/Header.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import helpPage from '../components/helpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={helpPage} /> 
        <Route component={NotFoundPage} />
        
    </Switch>
    </div> 
    
    
</BrowserRouter>
)
    

export default AppRouter;