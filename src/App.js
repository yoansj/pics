import React from 'react';
import './App.css';

import Settings from './components/Settings'

const styles = {
    gradient: {
        width: "100%",
        background: "linear-gradient(rgba(250,0,0,0.5), transparent)",
        backgroundColor: "rgba(250,250,0,0.5)",
    }
}

function App() {
    return (
        <div style={styles.gradient}>
            <Settings />
        </div>
    );
}

export default App;
