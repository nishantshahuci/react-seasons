// import React
import React from 'react';

// Loader component
const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// default props
Loader.defaultProps = {
    message: 'Loading...'
};

// export the component
export default Loader;
