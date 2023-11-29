import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Positions} from "./pages/Positions";

function App() {
    return (
        <div className="App">
            <div className={"main-title"}>CSS Positions</div>
            <header className="sticky-header">
                <h1>Sticky Header</h1>
            </header>
            <Positions/>
            <Positions/>
            <Positions/>
            <Positions/>
            <img src="/assets/images/logo.png" alt="logo" className={"bg-logo"}/>
            <div className={"program-name left"}>Coder Catalyst Program</div>
            <div className={"program-name right"}>UI Practices</div>
        </div>
    );
}

export default App;
