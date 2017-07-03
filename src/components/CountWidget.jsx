import React from 'react';

let CountWidget = ({count, handleClick}) => {
    return <div>
        <h1>Current count: {count}</h1>
        <button onClick={handleClick}>Add one</button>
    </div>
};

export default CountWidget;
