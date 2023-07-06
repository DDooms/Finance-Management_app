import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
/*import { AuthProvider } from './AuthContext';*/
import Register from './components/register/Register';
import Login from './components/register/Login';
import Home from "./components/home/Home";
import Error from "./components/error/Error";
import Dashboard from "./components/dashboard/Dashboard";
import ThemeToggle from "./components/button/ThemeToggle";
import Cashflow from "./components/dashboard/income_expense/Cashflow";
import BudgetGoals from "./components/dashboard/financial_goals/BudgetGoals";
import Savings from "./components/dashboard/savings/Savings";
import InvestmentTracking from "./components/dashboard/investment_tracking/InvestmentTracking";
import Analytics from "./components/dashboard/analytics/Analytics";
import Account from "./components/dashboard/my_account/Account";


function App() {
    return (
        // <AuthProvider>
        <Router>
            <div className="App">
                <div className="theme-toggle">
                    <ThemeToggle />
                </div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="income-and-expense-tracking" element={<Cashflow />} />
                        <Route path="budget-financial-goals" element={<BudgetGoals />} />
                        <Route path="savings-and-transactions" element={<Savings />} />
                        <Route path="investment-tracking" element={<InvestmentTracking />} />
                        <Route path="analytics" element={<Analytics />} />
                        <Route path="account" element={<Account />} />
                    </Route>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </div>
        </Router>
        // </AuthProvider>
    );
}

export default App;