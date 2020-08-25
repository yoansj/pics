import React from 'react';

import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import firebase from 'firebase'
import database from '../firebase.js'
import { v4 as uuidv4 } from 'uuid';

class Views extends React.Component {

    constructor() {
        super();
        this.state = {
            showWelcome: false,
            showGreen: false,
            views: 69,
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
            this.setState({views: doc.data().views});
        }.bind(this))
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: 10}}>
                <Tooltip title={"Pics currently has " + this.state.views + " unique viewers thanks :)"} arrow disableFocusListener >
                    <VisibilityIcon style={{fontSize: 30, color: this.getColor()}} />
                </Tooltip>
                <Snackbar open={this.state.showWelcome} onClose={() => this.setState({showWelcome: false})} autoHideDuration={5000}>
                    <MuiAlert variant="filled" onClose={() => this.setState({showWelcome: false})} severity="success">Welcome new viewer :)</MuiAlert>
                </Snackbar>
            </div>
        )
    }
}

export default Views;