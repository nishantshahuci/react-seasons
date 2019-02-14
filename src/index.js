// import react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// App component
class App extends Component {

    constructor (props) {
        super(props);

        // initialize state
        this.state = {
            lat: null
        };

        // get the user's current position
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // must call setState to change state
                this.setState({ lat: position.coords.latitude });
            },
            error => {
                console.log(error);
            }
        );
    }

    // must define this function
    render () {
        return <div>Latitude: {this.state.lat}</div>;
    }

};

// render App
ReactDOM.render(<App />, document.querySelector('#root'));
