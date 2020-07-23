import React from 'react';
import Button from 'react-bootstrap/Button';

function DPauseButton(props)
{
    function displayLogic() {
        if (props.isPaused === true)
            return (<h1>Continuer</h1>)
        else
            return (<h1>Pause</h1>)
    }

    return (
        <Button variant="primary" onClick={() => props.onClick()}>
            {displayLogic()}
        </Button>
    );
}

export default DPauseButton;