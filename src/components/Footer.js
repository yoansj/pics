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
        noLinkText: {
            fontFamily: 'Roboto Mono',
            fontSize: 15,
            fontWeight: 900,
            textAlign: 'center',
            color: 'white',
            paddingTop: 5
        },
        separator: {
            fontFamily: 'Roboto Mono',
            fontSize: 20,
            fontWeight: 900,
            color: 'white',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5
        },
    }

    return (
        <div style={styles.footer}>
            <h6 style={styles.separator} >•</h6>
            <h6 style={styles.noLinkText}>Powered by React 🖥 </h6>
            <h6 style={styles.separator} >•</h6>
            <a style={styles.smallText} href={"https://www.linkedin.com/in/ysjtek/"}>© {new Date().getFullYear()} Copyright: Yoan Saint Juste 💙</a>
            <h6 style={styles.separator} >•</h6>
            <a style={styles.smallText} href={"https://github.com/yoansj/pics"}>Github Page <span role="img" aria-label="please">📁</span></a>
            <h6 style={styles.separator} >•</h6>
            <a style={styles.smallText} href={"https://www.instagram.com/rboypics/"}>See more pictures 🖼 </a>
            <h6 style={styles.separator} >•</h6>
        </div>
    );
}

export default Footer;