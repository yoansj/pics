import React from 'react';
import './App.css';

import Settings from './components/Settings'

const styles = {
    gradient: {
        width: "100%",
        minHeight: "100%",
        backgroundColor: 'white',
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
