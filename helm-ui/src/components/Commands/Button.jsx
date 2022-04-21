import React, { Component } from 'react';
import './Button.css'
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <a onClick={this.props.onClickHandler}>
                <div className={"lcars-button" + " " + this.props.style}>{this.props.text}</div>
            </a>
        );
    }
}

Button.propTypes = {
    style: PropTypes.string,
    text: PropTypes.string,
    onClickHandler: PropTypes.func
};

export default Button;