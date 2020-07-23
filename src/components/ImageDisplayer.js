import React, { useState } from 'react';

import Image from 'react-bootstrap/Image';

import ImageList from '../images/imageList.js';
import ImageButton from './ImageButton'

function ImageDisplayer() {
    const [image, setImage] = useState(ImageList[0]);

    function swapImage() {
        setImage(ImageList[1]);
    }

    const styles = {
        imageDiv: {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column'
        },
        textAndButtonDiv: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
        },
        image: {
            paddingTop: 20,
            textAlign: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
            maxWidth: "60%",
        },
        imageText: {
            fontFamily: 'Monsterrat',
            fontSize: 60,
            fontWeight: 800,
            fontStyle: 'italic',
        }
    }

    return (
        <div style={styles.imageDiv}>
            <Image src={image.src} style={styles.image} fluid></Image>
            <div style={styles.textAndButtonDiv}>
                <text style={styles.imageText}>{image.name}</text>
                <ImageButton onClick={swapImage}></ImageButton>
            </div>
        </div>
    )
}

export default ImageDisplayer;