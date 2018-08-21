import React from 'react';

const Contact = props => {
    return (
        <div>
            <p>You need to contact {props.firstName} {props.lastName} at {props.phoneNumber}.</p>
        </div>
    )
};

export default Contact;