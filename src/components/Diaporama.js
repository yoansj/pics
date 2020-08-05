import React from 'react';
import Image from 'react-bootstrap/Image';

import DPauseButton from './DPauseButton'
import DModal from './DModal'
import DImageLoading from './DImageLoading'


export function getRndInteger(min, max) {
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
            lastImageShown: NaN,
            showModal: false,
            isImageLoaded: false,
            isImageFailLoaded: false
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
        return (this.props.imageList[getRndInteger(0, this.props.imageList.length - 1)]);
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

    setImageLoaded(bool) {
        this.setState({
            isImageLoaded: bool
        });
    }

    setImageFailLoaded(bool) {
        this.setState({
            isImageFailLoaded: bool
        });
    }

    pauseDiaporama() {
        if (this.state.isPaused === false) {
            this.setState((state) => ({
                isPaused: true,
            }));
            clearInterval(this.imageTimer);
        } else {
            this.setState((state) => ({
                isPaused: false,
            }));
            this.imageTimer = setInterval(
                () => this.updateTime(),
                1000
            );
        }
    }

    /**
     * This method modifies the states of the Diaporama component
     * to show a new image to the user
     */
    nextImage() {
        var newImage = this.getRandomImage();

        while (newImage === this.state.imageShown || newImage === this.state.lastImageShown) {
            newImage = this.getRandomImage();
        }

        this.setState((state) => ({
            seconds: 0,
            timeSwitch: getRndInteger(10, 60),
            lastImageShown: state.imageShown,
            imageShown: newImage,
            showModal: false,
            isImageLoaded: false,
            isImageFailLoaded: false
        }));
    }

    /**
     * This method is called by the intervals (see pauseDiaporama())
     * This method increases the seconds state and calls the nextImage() method
     * when the seconds state is equal to the timeSwitch state
     */
    updateTime() {

        this.setState((state) => ({
            seconds: state.seconds + 1,
        }));

        if (this.state.seconds === this.state.timeSwitch)
            this.nextImage();
    }

    render() {
        return (
            <div style={styles.imageDiv}>
                    <Image
                        src={this.state.imageShown.src}
                        style={styles.image}
                        onClick={() => this.showModal()}
                        onLoad={() => this.setImageLoaded(true)}
                        onError={() => this.setImageFailLoaded(true)}
                        fluid
                    />
                <DImageLoading isImageLoaded={this.state.isImageLoaded}/>
                <div style={styles.textAndButtonDiv}>
                    <text style={styles.imageText}>{this.state.imageShown.name}</text>
                    <DModal showModal={this.state.showModal} hideModal={() => this.hideModal()} imageShown={this.state.imageShown} />
                    <DPauseButton onClick={() => this.pauseDiaporama()} isPaused={this.state.isPaused}></DPauseButton>
                </div>
            </div>
        );
    }

}

export default Diaporama;