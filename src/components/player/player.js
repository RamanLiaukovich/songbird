import React, { Component } from 'react';
import './player.css';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import songData from '../data/data'

export default class Player extends Component {

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
    };

    render() {

        const { image, artist, songName, audio } = songData[5][5];

        return(
            <div className="jumbotron player-wrapper">
                <div className="img-container">
                    <img src={ image } alt="item"/>
                </div>
                <div className="player-container">
                    <h2 className="item-name">{ artist } - { songName }</h2>
                    <div className="player">
                        <AudioPlayer src={ audio }
                            showJumpControls={false} 
                            loop={true} />
                    </div>
                </div>
            </div>
        )
    }
}