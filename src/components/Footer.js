import React from 'react';

function Footer() {

    const styles = {
        footer: {
            width: '100%',
            display: 'flex',
            backgroundColor: 'black',
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
        },
        smallText: {
            fontFamily: 'Roboto Mono',
            fontSize: 15,
            fontWeight: 900,
            textAlign: 'center',
            color: 'white'
        },
        separator: {
            fontFamily: 'Roboto Mono',
            fontSize: 20,
            fontWeight: 900,
            color: 'white',
            paddingLeft: 5,
            paddingRight: 5,

        },
    }

    return (
        <div style={styles.footer}>
            <a style={styles.separator} >•</a>
            <a style={styles.smallText}>Powered by React 🖥 </a>
            <a style={styles.separator} >•</a>
            <a style={styles.smallText} href={"https://www.linkedin.com/in/ysjtek/"}>© {new Date().getFullYear()} Copyright: Yoan Saint Juste 💙</a>
            <a style={styles.separator} >•</a>
            <a style={styles.smallText} href={"https://github.com/yoansj/pics"}>Github Page 📁</a>
            <a style={styles.separator} >•</a>
            <a style={styles.smallText} href={"https://www.instagram.com/rboypics/"}>See more pictures 🖼 </a>
            <a style={styles.separator} >•</a>
        </div>
    );
}

export default Footer;