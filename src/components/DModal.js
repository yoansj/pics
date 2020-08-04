import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function DModal(props) {

    function showCategories() {
        var toReturn = [];

        props.imageShown.categories.forEach(element => {
            toReturn.push(element.style);
        })

        return(
            <div>
                <h3>Catégories : </h3>
                {props.imageShown.categories.map((category) =>
                    <h3>- {category.style}</h3>
                )}
            </div>
        )
    }

    return (
        <div>
            <Modal show={props.showModal} onHide={props.hideModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{props.imageShown.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.imageShown.src} fluid></Image>
                    {showCategories()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.hideModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DModal;