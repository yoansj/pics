import React from 'react';
import Image from 'react-bootstrap/Image';

import DPauseButton from './DPauseButton'
import DModal from './DModal'
import ImageList from '../images/imageList.js';


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const styles = {
    imageDiv: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    textAndButtonDiv: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        paddingTop: 20,
        textAlign: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        maxWidth: "60%",
    },
    imageText: {
        fontFamily: 'Monsterrat',
        fontSize: 60,
        fontWeight: 800,
        fontStyle: 'italic',
    }
}

class Diaporama extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            timeSwitch: getRndInteger(10, 60),
            isPaused: false,
            imageShown: this.getRandomImage(),
            showModal: false
        }
    }

    componentDidMount() {
        this.imageTimer = setInterval(
            () => this.updateTime(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.imageTimer);
    }

    getRandomImage() {
        return (ImageList[getRndInteger(0, ImageList.length - 1)]);
    }

    showModal() {
        this.setState({
            showModal: true
        });
    }

    hideModal() {
        this.setState({
            showModal: false
        });
    }

    debugText() {
        if (false)
            return (<h1>Secondes: {this.state.seconds}, Target: {this.state.timeSwitch}</h1>);
    }

    pauseDiaporama() {
        if (this.state.isPaused === false) {
            // Si l'utilisateur met pause
            // Alors on stoppe le timer
            this.setState((state) => ({
                isPaused: true,
            }));
            clearInterval(this.imageTimer);
        } else {
            // Si l'utilisateur continue
            // Alors on relance un timer
            this.setState((state) => ({
                isPaused: false,
            }));
            this.imageTimer = setInterval(
                () => this.updateTime(),
                1000
            );
        }
    }

    nextImage() {
        this.setState({
            seconds: 0,
            timeSwitch: getRndInteger(10, 60),
            imageShown: this.getRandomImage(),
            showModal: false
        });
    }

    updateTime() {

        // On update les secondes
        this.setState((state) => ({
            seconds: state.seconds + 1,
        }));

        // Si secondes équivaut a timeSwitch alors on change d'image
        if (this.state.seconds === this.state.timeSwitch)
            this.nextImage();
    }

    render() {
        return (
            <div style={styles.imageDiv}>
            <Image src={this.state.imageShown.src} style={styles.image} onClick={() => this.showModal()} fluid></Image>
                <div style={styles.textAndButtonDiv}>
                    <text style={styles.imageText}>{this.state.imageShown.name}</text>
                    {this.debugText()}
                    <DModal showModal={this.state.showModal} hideModal={() => this.hideModal()} imageShown={this.state.imageShown} />
                    <DPauseButton onClick={() => this.pauseDiaporama()} isPaused={this.state.isPaused}></DPauseButton>
                </div>
            </div>
        );
    }

}

export default Diaporama;