import React, { Component } from 'react';
import './player.css';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class Player extends Component {
    render() {
        return(
            <div className="jumbotron player-wrapper">
                <div className="img-container">
                    <img src="" alt="item"/>
                </div>
                <div className="player-container">
                    <h2 className="item-name">Журавль</h2>
                    <div className="player">
                        <AudioPlayer src="https://music.yandex.by/album/11735202/track/69827710" showJumpControls={false} />
                    </div>
                </div>
            </div>
        )
    }
}