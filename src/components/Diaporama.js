import React from 'react';
import Image from 'react-bootstrap/Image';

import DPauseButton from './DPauseButton'
import DModal from './DModal'
import DImageLoading from './DImageLoading'
import Radio from './Radio'

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function getRndFloat(min, max) {
    return (Math.random() * (max - min + 1)) + min;
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
        textAlign: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        maxWidth: "50%",
        boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.75)",
    },
    imageText: {
        fontFamily: 'Roboto Mono',
        fontSize: 60,
        fontWeight: 900,
        textAlign: 'center'
    }
}

class Diaporama extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            timeSwitch: getRndInteger(20, 45),
            isPaused: false,
            imageShown: this.getRandomImage(),
            lastImageShown: null,
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
            showModal: true,
        });

        if (!this.state.isPaused)
            this.pauseDiaporama();
    }

    hideModal() {
        this.setState({
            showModal: false,
        });

        if (this.state.isPaused)
            this.pauseDiaporama();
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
        var tries = 0;
        
        while (newImage === this.state.imageShown || newImage === this.state.lastImageShown) {
            newImage = this.getRandomImage();
            tries++;
            if (tries >= 5) break;
        }

        this.setState((state) => ({
            seconds: 0,
            timeSwitch: getRndInteger(20, 45),
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

        if (this.state.isImageLoaded === false) return;

        this.setState((state) => ({
            seconds: state.seconds + 1,
        }));

        if (this.state.seconds === this.state.timeSwitch)
            this.nextImage();
    }

    setPreviousImage() {
        this.setState((state) => ({
            imageShown: state.lastImageShown,
            seconds: 0,
            timeSwitch: getRndInteger(20, 45),
            lastImageShown: state.imageShown,
            showModal: false,
            isImageLoaded: false,
            isImageFailLoaded: false
        }));
    }

    PreviousButton() {
        return (
            <div>
            {this.state.lastImageShown === null ?
                <IconButton disabled >
                    <SkipPreviousIcon style={{fontSize: 40}} />
                </IconButton>
                :
                <Tooltip title="Previous image" arrow disableFocusListener >
                    <IconButton onClick={() => this.setPreviousImage()} >
                    <SkipPreviousIcon style={{color: 'black', fontSize: 40}} />
                    </IconButton>
                </Tooltip>
            }
            </div>
        );
    }

    NextButton() {
        return (
            <Tooltip title="Next image" arrow disableFocusListener >
                <IconButton onClick={() => this.nextImage()} >
                <SkipNextIcon style={{color: 'black', fontSize: 40}} />
                </IconButton>
            </Tooltip>
        );
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
                <DModal showModal={this.state.showModal} hideModal={() => this.hideModal()} imageShown={this.state.imageShown} />
                <div style={styles.textAndButtonDiv}>
                    <text style={styles.imageText}>{this.state.imageShown.name}</text>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {this.PreviousButton()}
                        <DPauseButton onClick={() => this.pauseDiaporama()} isPaused={this.state.isPaused}></DPauseButton>
                        {this.NextButton()}
                        <Radio radioVolume={this.props.radioVolume} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Diaporama;