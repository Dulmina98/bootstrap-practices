import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GridSystem} from "./pages/GridSystem";

function App() {
    return (
        <div className="App">
            <div className={"main-title"}>Bootstrap Grid System</div>
            <GridSystem/>
            <div className={"program-name"}>Coder Catalyst Program</div>
        </div>
    );
}

export default App;
