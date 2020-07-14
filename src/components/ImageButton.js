import React from 'react';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import logo from '../assets/next.png'



function ImageButton(props)
{
    const Styles = {
        logo: {
            width: 250,
            height: 250
        }
    }

    return (
        <Button variant="primary" onClick={() => props.onClick()}>Prochaine image</Button>
    );
}

export default ImageButton;