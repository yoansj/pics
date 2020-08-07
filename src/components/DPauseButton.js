import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import Fade from 'react-bootstrap/Fade'

import './DPauseButton.css'

function DPauseButton(props)
{
    const [fade, setFade] = useState(true);

    function fadeFunc()
    {
        props.onClick();
        setFade(true);
    }

    function toCallOnClick()
    {
        setFade(false);
        setTimeout(() => {fadeFunc()}, 500);
    }

    if (props.isPaused === true) {
        return (
        <div className="mainDiv">
            <Fade in={fade}>
                <Image
                className="image"
                src={require("../assets/play.png")}
                onClick={() => toCallOnClick()}
                title="https://icones8.fr/icons/set/play"
                />
            </Fade>
        </div>
        );
    } else {
        return (
        <div className="mainDiv">
            <Fade in={fade}>
                <Image
                className="image"
                src={require("../assets/pause.png")}
                onClick={() => toCallOnClick()}
                title="https://icones8.fr/icons/set/pause"
                />
            </Fade>
        </div>
        );
    }
}

export default DPauseButton;