import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

function DModal(props) {

    const styles = {
        modalText: {
            fontFamily: 'Roboto Mono',
            fontSize: 30,
            fontWeight: 80,
        }
    }

    function showCategories() {
        var toReturn = [];

        props.imageShown.categories.forEach(element => {
            toReturn.push(element.style);
        })

        return(
            <div>
                <h3 style={styles.modalText}>Catégories : </h3>
                {props.imageShown.categories.map((category) =>
                    <h3 style={styles.modalText}>• {category.style}</h3>
                )}
            </div>
        )
    }

    return (
        <div>
            <Modal show={props.showModal} onHide={props.hideModal} size="xl">
                <Modal.Header closeButton>
                        <Modal.Title style={styles.modalText}>{props.imageShown.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.imageShown.src} fluid></Image>
                </Modal.Body>
                <Modal.Footer style={{justifyContent: 'flex-start'}}>
                    {showCategories()}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DModal;