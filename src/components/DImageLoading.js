import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

function DImageLoading(props)
{
    if (props.isImageLoaded === false) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Chargement...</span>
            </Spinner>
        );
    } else if (props.isImageLoaded === true)
        return (<div></div>);
    else if (props.isImageFailLoaded === true)
        return (<h3>Hey the image failed to load would you refresh that window please ?</h3>);
}

export default DImageLoading;