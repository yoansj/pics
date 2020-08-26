import React from 'react';

import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import firebase from 'firebase'
import database from '../firebase.js'
import { v4 as uuidv4 } from 'uuid';

const styles = {
    viewsText: {
        fontFamily: 'Roboto Mono',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 16
    }
}

class Views extends React.Component {

    constructor() {
        super();
        this.state = {
            showWelcome: false,
            showGreen: false,
            views: 69,
            welcomeText: "Welcome to pics :)"
        }
    }

    getColor() {
        if (this.state.showGreen)
            return ('green');
        return ('black')
    }

    checkVisitor() {
        var uuid = window.localStorage.getItem("who are you");
    
        if (uuid == null) {
            window.localStorage.setItem("who are you", uuidv4());
            this.setState({showWelcome: true, showGreen: true});
            database.collection("views").doc("views").update({
                views: firebase.firestore.FieldValue.increment(1)
            })
        }
    }

    componentWillMount() {
        this.checkVisitor();
        database.collection("views").doc("views").onSnapshot(function(doc) {
            this.setState({views: doc.data().views, showWelcome: false, welcomeText: "A new viewer joined pics :)"});
        }.bind(this))
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: 10}}>
                    <Tooltip title={"Pics currently has " + this.state.views + " unique viewers thanks :)"} arrow disableFocusListener >
                        <VisibilityIcon style={{fontSize: 30, color: this.getColor()}} />
                    </Tooltip>
                    <Snackbar open={this.state.showWelcome} onClose={() => this.setState({showWelcome: false})} autoHideDuration={5000}>
                        <MuiAlert variant="filled" onClose={() => this.setState({showWelcome: false})} severity="success">{this.state.welcomeText}</MuiAlert>
                    </Snackbar>
                </div>
                <div>
                    <h6 style={styles.viewsText}>{this.state.views}</h6>
                </div>
            </div>
        )
    }
}

export default Views;