import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

import Diaporama, { getRndInteger } from './Diaporama'
import Radio from './Radio'
import ImageList from '../images/imageList.js'

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                ["Portrait", true, 0],
                ["Montage", true, 1],
                ["Paysage", true, 2],
                ["Sneakers", true, 3],
                ["Architecture", true, 4],
                ["Light Painting", true, 5],
                ["Nuit", true, 6],
                ["Noir et Blanc", true, 7],
            ],
            isOpen: false,
            sortedImageList: ImageList
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

    sortImageList() {
        var newList = [];
        var doBreak = false;

        ImageList.forEach((image) => {
            for (var i = 0; i !== image.categories.length; i++) {
                for (var s = 0; s !== this.state.categories.length; s++) {
                    if (doBreak) {
                        doBreak = false;
                        break;
                    }
                    if (image.categories[i].style === this.state.categories[s][0] && this.state.categories[s][1]) {
                        newList.push(image);
                        doBreak = true;
                        break;
                    }
                }
            }
        });

        this.setState({sortedImageList: newList});
    }

    setOpen(is = true) {
        this.setState({isOpen: is});
    }

    checkZeroCategories(newCategories) {
        for (var i = 0; i !== newCategories.length; i++) {
            if (newCategories[i][1])
                return (newCategories);
        }
        newCategories[getRndInteger(0, newCategories.length - 1)][1] = true;
        return (newCategories);
    }

    /**
     * This functions sets a category to true or false (active or not)
     * Categories are stored in an array, the first parameter is the index of the category
     */
    setCategory(index = 0, is = true) {
        var newCategories = this.state.categories;

        newCategories[index][1] = is;
        newCategories = this.checkZeroCategories(newCategories);
        this.setState({categories: newCategories});
        this.sortImageList();
    }

    render() {
        return (
            <div>
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
                <Diaporama imageList={this.state.sortedImageList} />
                <Radio></Radio>
            </div>
        );
    }
}

export default Settings;