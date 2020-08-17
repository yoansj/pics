import React, { useState } from 'react';

import Tooltip from '@material-ui/core/Tooltip';
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
            <Tooltip title="Resume the diaporama" arrow disableFocusListener >
                <IconButton onClick={() => toCallOnClick()}>
                    <PlayArrowIcon style={{color: 'black', fontSize: 40}} />
                </IconButton>
            </Tooltip>
        );
    } else {
        return (
            <Tooltip title="Pause the diaporama" arrow disableFocusListener >
                <IconButton onClick={() => toCallOnClick()}>
                    <PauseIcon style={{color: 'black', fontSize: 40}} />
                </IconButton>
            </Tooltip>
        );
    }
}

export default DPauseButton;