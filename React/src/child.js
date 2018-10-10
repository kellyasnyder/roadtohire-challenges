import React from 'react';

// VERY HARD CHALLENGE

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'orange' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        if (this.state.color === 'orange'){
            this.setState({color: 'green'});
        } else {
            this.setState({color: 'orange'});
        }
    };

    render() {
        return (
            <div>
                <div className={this.state.color}></div>
                <p>You need to contact {this.props.firstName} {this.props.lastName} at {this.props.phoneNumber}.</p>
                <button onClick={this.handleClick} className="button">Click to change status</button>
            </div>
        )
    }
};

export default Contact;