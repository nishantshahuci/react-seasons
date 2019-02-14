// import react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// App component
class App extends Component {

    constructor (props) {
        super(props);

        // initialize state
        this.state = {
            lat: null,
            errorMessage: ''
        };

        // get the user's current position
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // must call setState to change state
                this.setState({ lat: position.coords.latitude });
            },
            error => {
                this.setState({ errorMessage: error.message });
            }
        );
    }

    // must define this function
    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }

};

// render App
ReactDOM.render(<App />, document.querySelector('#root'));
