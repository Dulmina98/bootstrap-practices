import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Breakpoints} from "./pages/Breakpoints";

function App() {
    return (
        <div className="App">
            <div className={"main-title"}>Bootstrap - Grid System</div>
            <Breakpoints/>
            <img src="/assets/images/logo.png" alt="logo" className={"bg-logo"}/>
            <div className={"program-name left"}>Coder Catalyst Program</div>
            <div className={"program-name right"}>UI Practices</div>
        </div>
    );
}

export default App;
