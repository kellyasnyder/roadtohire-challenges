import React from 'react';

const Person = props => {
    return (
        <div>
            {/* VERY EASY AND EASY CHALLENGE */}
            <h1>Hello world, {props.name}</h1>
            {/* MEDIUM CHALLENGE */}
            {props.children}
        </div>
    )
};

export default Person;