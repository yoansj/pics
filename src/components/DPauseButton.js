import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
            <IconButton onClick={() => toCallOnClick()}>
                <PlayArrowIcon style={{color: 'black', fontSize: 40}} />
            </IconButton>
        );
    } else {
        return (
            <IconButton onClick={() => toCallOnClick()}>
                <PauseIcon style={{color: 'black', fontSize: 40}} />
            </IconButton>
        );
    }
}

export default DPauseButton;