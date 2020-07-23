import React from 'react';
import './App.css';

import Diaporama from './components/Diaporama'

const Box = ({color1}) => {
    const rgb = [color1.substring(1,3), color1.substring(3,5), color1.substring(5,7)];
    const color2 = `rgb(${rgb.map(c => (parseInt(c, 16) * 0.8)).join()})`;
    return (
        <div className="box" style={{maxWidth: '100%', background: `linear-gradient(${color1}, ${color2})`}} />
    );
}


function App() {
    return (
        <div style={{'--color-1': 'deepskyblue', '--color-2': 'navy',
            background: `linear-gradient(170deg, var(--color-1), var(--color-2) 80%)`}}>
            <Diaporama />
        </div>
    );
}

export default App;
