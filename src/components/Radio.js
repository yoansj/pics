import React from 'react';
import Sound from 'react-sound';

import IconButton from '@material-ui/core/IconButton';
import RadioIcon from '@material-ui/icons/Radio';

import { getRndInteger } from './Diaporama';

const URL_TO_SOUNDS = "http://github.com/yoansj/pics/raw/master/src/musics/";

class Radio extends React.Component {

    //Idée
    // Quand l'utilisateur allume la radio pour la première fois
    // la radio joue un son random à un moment random
    // Une fois que la radio est allumée un compteur prend en compte les secondes passées
    // par exemple si l'utilisateur éteint la radio puis la rallume 10s plus tard le son joué
    // sera le son joué il y a 10s avancé de 10s
    // Parfois à la fin d'une musique un son de transition sera joué


    constructor(props) {
        super(props);
        this.state = {
            playlist: ["dance.mp3", "portugal.mp3"],
            transitions: [],
            playStatus: Sound.status.PLAYING,
            playFromPosition: null,
            pauseTimerInterval: 0,
            miliSecSincePause: 0.0,
            soundDuration: 0,
            isOn: false,
            alreadyStarted: false,
            soundOn: new Audio(require("../sounds/radioOn.mp3")),
            soundOff: new Audio(require("../sounds/radioOff.mp3")),
        }
    }

    handleLoad(soundInfo) {
        this.setState({soundDuration: soundInfo.duration})
    }

    handlePause(soundInfo) {
        this.setState({pausePosition: soundInfo.position})
    }

    handleEnd() {
        this.pickNewSound();
    }

    radioStartup() {
        this.pickNewSound();
    }

    pickNewSound() {
        this.setState((state) => ({
            playing: URL_TO_SOUNDS + this.state.playlist[getRndInteger(0, this.state.playlist.length - 1)],
        }));
    }

    updateRadio() {
        this.setState((state) => ({miliSecSincePause: state.miliSecSincePause + 1000}));

        if (this.state.miliSecSincePause >= this.state.soundDuration) {
            this.pickNewSound();
        }
    }

    radioManager() {
        if (this.state.isOn === false) {

            this.setState({isOn: true});
            this.state.soundOn.play();

            if (this.state.alreadyStarted === false) {
                this.radioStartup();
                this.setState({alreadyStarted: true});
            } else {
                clearInterval(this.state.pauseTimerInterval);
                this.setState((state) => ({
                    playStatus: Sound.status.PLAYING,
                    playFromPosition: state.pausePosition + state.miliSecSincePause,
                    miliSecSincePause: 0
                }));
                this.setState({playFromPosition: null});
                //Jouer la musique en prenant en compte le décalage
            }

        } else {
            this.state.soundOff.play();
            this.setState({isOn: false, playStatus: Sound.status.PAUSED, pauseTimerInterval: setInterval(() => this.updateRadio(), 1000)});
        }
    }

    render() {
        return (
            <div>
                <IconButton onClick={() => this.radioManager()}>
                    <RadioIcon style={{color: 'black', fontSize: 40}} />
                </IconButton>
                <Sound
                    url={this.state.playing}
                    playStatus={this.state.playStatus}
                    playFromPosition={this.state.playFromPosition}
                    onPause={this.handlePause.bind(this)}
                    onFinishedPlaying={this.handleEnd.bind(this)}
                />
            </div>
        );
    }
}

export default Radio;