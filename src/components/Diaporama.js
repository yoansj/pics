import React from 'react';
import DPauseButton from './DPauseButton'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class Diaporama extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            timeSwitch: getRandomInt(60),
            isPaused: false
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

    pauseDiaporama() {
        if (this.state.isPaused === false) {
            // Si l'utilisateur met pause
            // Alors on stoppe le timer
            this.setState((state) => ({
                seconds: state.seconds,
                timeSwitch: state.timeSwitch,
                isPaused: true
            }));
            clearInterval(this.imageTimer);
        } else {
            // Si l'utilisateur continue
            // Alors on relance un timer
            this.setState((state) => ({
                seconds: state.seconds,
                timeSwitch: state.timeSwitch,
                isPaused: false
            }));
            this.imageTimer = setInterval(
                () => this.updateTime(),
                1000
            );
        }
    }

    updateTime() {

        // On update les secondes
        this.setState((state) => ({
            seconds: state.seconds + 1,
            timeSwitch: state.timeSwitch,
            isPaused: state.isPaused
        }));

        // Si secondes équivaut a timeSwitch alors on change d'image
        if (this.state.seconds === this.state.timeSwitch) {
            this.setState({
                seconds: 0,
                timeSwitch: getRandomInt(60),
                isPaused: false
            });
            alert("Changement d'image !");
            //Changer d'image ici
        }
    }

    render() {
        return (
            <div>
                <h1>Secondes: {this.state.seconds}, Target: {this.state.timeSwitch}</h1>
                <DPauseButton onClick={() => this.pauseDiaporama()} isPaused={this.state.isPaused}></DPauseButton>
            </div>
        );
    }

}

export default Diaporama;