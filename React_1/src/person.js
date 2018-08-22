import React from 'react';

const Person = props => {
    return (
        <div>
            <h1>Hello world, {props.name}</h1>
            {props.children}
        </div>
    )
};

export default Person;