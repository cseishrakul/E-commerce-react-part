import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes,Route} from 'react-router';
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Thanks from "./components/Thanks";
import Login from "./components/Login";
import Account from "./components/Account";

function App(){
    return(
        <div className="">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={ <Home /> }></Route>
                    <Route exact path="/about" element={ <About /> }></Route>
                    <Route exact path="/contact" element={ <Contact /> }></Route>
                    <Route exact path="/register" element={ <Register /> }></Route>
                    <Route exact path="/login" element={ <Login /> }></Route>

                    
                    <Route exact path="/thanks" element={ <Thanks /> }></Route>
                    <Route exact path="/account" element={ <Account /> }></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;