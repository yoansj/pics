import React from 'react';
import './App.css';

import Settings from './components/Settings'


function App() {
    return (
        <div style={{'--color-1': 'deepskyblue', '--color-2': 'navy',
            background: `linear-gradient(170deg, var(--color-1), var(--color-2) 80%)`}}>
            <Settings />
        </div>
    );
}

export default App;
