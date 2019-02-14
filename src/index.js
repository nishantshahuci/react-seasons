// import react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// App component
class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            lat: null
        };
    }

    // must define this function
    render () {

        // get the user's current position
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
            },
            error => {
                console.log(error);
            }
        );

        return <div>Latitude: </div>;
    }

};

// render App
ReactDOM.render(<App />, document.querySelector('#root'));
