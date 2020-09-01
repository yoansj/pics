import React from 'react';

import Settings from './components/Settings'
import Footer from './components/Footer';

const styles = {
    app: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
    }
}

function App() {
    return (
        <div>
            <div style={styles.app}>
                <Settings />
            </div>
            <Footer />
        </div>
    );
}

export default App;
