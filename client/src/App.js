import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
/*import { AuthProvider } from './AuthContext';*/
import Register from './components/register/Register';
import Login from './components/register/Login';
import Home from "./components/home/Home";
import Error from "./components/error/Error";
import {Dashboard} from "@material-ui/icons";


function App() {
    return (
        // <AuthProvider>
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </div>
        </Router>
        // </AuthProvider>
    );
}

export default App;