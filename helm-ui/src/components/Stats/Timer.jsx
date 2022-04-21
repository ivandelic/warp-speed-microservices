import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timer.css'

class Timer extends Component {
    render() {
        return (
            <div className="Timer">
                <span className={this.props.styleClass}>{this.props.time < 0 ? 0 : this.props.time}</span>
                <span>  </span>
                <span className={this.props.styleClass}>{this.props.total}</span>
            </div>
        );
    }
}

Timer.propTypes = {
    styleClass: PropTypes.string,
    time: PropTypes.number,
    total: PropTypes.number
};

export default Timer;