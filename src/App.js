import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes,Route} from 'react-router';
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Thanks from "./components/Thanks";

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
                    <Route exact path="/thanks" element={ <Thanks /> }></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;