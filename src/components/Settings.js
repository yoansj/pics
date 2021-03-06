import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

import { withStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';

import Diaporama, { getRndInteger } from './Diaporama'
import ImageList from '../images/imageList.js'
import Views from './Views'


const styles = {
    modalText: {
        fontFamily: 'Roboto Mono',
        fontSize: 30,
        fontWeight: 900,
        textAlign: 'center',
    },
    smallText: {
        fontFamily: 'Roboto Mono',
        fontSize: 15,
        fontWeight: 900,
        textAlign: 'center',
    },
    buttonText: {
        fontFamily: 'Roboto Mono',
        fontSize: 18,
        fontWeight: 990,
        textAlign: 'center',
    }
}

const VolumeSlider = withStyles({
    root: {
        color: '#52af77',
    },
    thumb: {
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
    },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        borderRadius: 4,
    },
    rail: {
        borderRadius: 4,
    },
})(Slider);

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                ["Portrait", true, 0],
                ["Montage", true, 1],
                ["Landscape", true, 2],
                ["Sneakers", true, 3],
                ["Architecture", true, 4],
                ["Light Painting", true, 5],
                ["Night", true, 6],
                ["Black & White", true, 7],
            ],
            isOpen: false,
            sortedImageList: ImageList,
            volume: 50
        }
    }
    

    Categories(props) {
        return (
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <h3 style={styles.modalText}>What is this website ?</h3>
                <h6 style={styles.smallText}>Pics is an interactive Diaporama that showcases basic React functionnalities.</h6>
                <h6 style={styles.smallText}>See the footer for more info about the creator and the pictures that are being shown. </h6>
                <Image style={{width: "10px", paddingTop: "3px", paddingBottom: "9px"}} src={require("../assets/dotIcon.png")} title={"https://icones8.fr/icons/set/new-moon"} />
                <h3 style={styles.modalText}>Categories</h3>
                <h6 style={styles.smallText}>Use the buttons to select the categories shown by the diaporama. Click on the image to show its categories</h6>
                <Image style={{width: "10px", paddingTop: "3px", paddingBottom: "9px"}} src={require("../assets/dotIcon.png")} title={"https://icones8.fr/icons/set/new-moon"} />
                {
                    props.parent.state.categories.map((category, index) =>
                        <Button
                        variant={props.parent.state.categories[index][1] ? "success" : "secondary"}
                        onClick={() => props.parent.setCategory(index, !props.parent.state.categories[index][1])}
                        block
                        >
                            <h6 style={styles.buttonText}>{props.parent.state.categories[index][0]}{props.parent.state.categories[index][1] === true && " ✓"}</h6>
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
                    <Modal show={this.state.isOpen} onHide={() => this.setOpen(false)} size="md">
                        <Modal.Header closeButton>
                            <Modal.Title style={styles.modalText}>Settings</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <this.Categories parent={this}></this.Categories>
                            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                                <Image style={{width: "10px", paddingTop: "9px", paddingBottom: "9px"}} src={require("../assets/dotIcon.png")} title={"https://icones8.fr/icons/set/new-moon"} />
                                <h3 style={styles.modalText}>Radio volume</h3>
                                <VolumeSlider
                                    defaultValue={this.state.volume}
                                    min={0}
                                    max={100}
                                    onChange={(event, value) => this.setState({volume: value})}
                                />
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <Views />
                <Diaporama radioVolume={this.state.volume} imageList={this.state.sortedImageList} />
            </div>
        );
    }
}

export default Settings;