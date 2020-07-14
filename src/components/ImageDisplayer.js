import React, { useState } from 'react';

import Image from 'react-bootstrap/Image';

import ImageList from '../images/imageList.js';
import ImageButton from './ImageButton'

function ImageDisplayer() {
    const [image, setImage] = useState(ImageList[0]);

    function swapImage() {
        setImage(ImageList[1]);
    }

    return (
        <div>
        <text>{image.name}</text>
        <Image></Image>
        <ImageButton onClick={swapImage}></ImageButton>
        </div>
    )
}

export default ImageDisplayer;