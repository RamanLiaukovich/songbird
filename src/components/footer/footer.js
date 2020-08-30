import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

    isGuessed = () => {
        return this.props.isGuessed ? "btn btn-success" : "btn btn-success disabled";
    }

    render() {

        const buttonClass = this.isGuessed();

        return(
            <button className={buttonClass} onClick={() => this.props.changeLevel()}>
                Next level
            </button>
        )
    }
}