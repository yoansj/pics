import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                ["Portrait", true],
                ["Montage", true],
                ["Paysage", true],
                ["Sneakers", true],
                ["Architecture", true],
                ["Light Painting", true],
                ["Nuit", true],
                ["Noir et Blanc", true],
            ],
            isOpen: false
        }
    }

    Categories(props) {
        return (
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <h3>Catégories</h3>
                <h6 style={{fontStyle: "italic", textAlign: "center"}}>Appuyez sur les boutons afin de sélectionner les catégories que vous souhaitez voir</h6>
                <Image style={{width: "10px", paddingTop: "3px", paddingBottom: "9px"}} src={require("../assets/dotIcon.png")} title={"https://icones8.fr/icons/set/new-moon"} />
                {
                    props.parent.state.categories.map((category, index) =>
                        <Button
                        variant={props.parent.state.categories[index][1] ? "primary" : "secondary"}
                        onClick={() => props.parent.setCategory(index, !props.parent.state.categories[index][1])}
                        block
                        >
                            {props.parent.state.categories[index][0]}
                            {props.parent.state.categories[index][1] === true && " ✓"}
                        </Button>
                )}
            </div>
        );
    }

    setOpen(is = true) {
        this.setState({isOpen: is});
    }

    /**
     * This functions sets a category to true or false (active or not)
     * Categories are stored in an array, the first parameter is the index of the category
     */
    setCategory(index = 0, is = true) {
        var newCategories = this.state.categories;

        newCategories[index][1] = is;
        this.setState({categories: newCategories
        });
    }

    render() {
        return (
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Image src={require("../assets/menuIcon.png")} onClick={() => this.setOpen(true)}/>
                    <div>
                        <Modal show={this.state.isOpen} onHide={() => this.setOpen(false)} size="md">
                            <Modal.Header closeButton>
                                <Modal.Title>Settings</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <this.Categories parent={this}></this.Categories>
                            </Modal.Body>
                        </Modal>
                    </div>
            </div>
        );
    }
}

export default Settings;