import React from 'react';
import './App.css';
import Motherboard from "./Motherboard";

export default function App() {
    return <div>
        <h1>Hi React</h1>
        <Motherboard brand="msi" name="XY-Z3P0"/>
        <Motherboard name="I-33"/>
    </div>
    ;
}
