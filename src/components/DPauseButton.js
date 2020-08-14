import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import Fade from 'react-bootstrap/Fade'

import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
        setTimeout(() => {fadeFunc()}, 400);
    }

    if (props.isPaused === true) {
        return (
        <div className="mainDiv">
            <IconButton onClick={() => toCallOnClick()}>
                <PlayArrowIcon style={{color: 'black', fontSize: 40}} />
            </IconButton>
        </div>
        );
    } else {
        return (
        <div className="mainDiv">
            <IconButton onClick={() => toCallOnClick()}>
                <PauseIcon style={{color: 'black', fontSize: 40}} />
            </IconButton>
        </div>
        );
    }
}

export default DPauseButton;