import React, { Component } from 'react';
import './item-description.css';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class ItemDescription extends Component {
    render() {
        return(
            <div className="card text-white bg-secondary mb-3 item-description-container">
                <div className="item-description-header card-header">
                    <img src="https://i.pinimg.com/originals/63/2d/6f/632d6f00a809cf8c77f65142395458de.png" alt="item"/>
                    <div className="item-description-title">
                        <h3>Ворона</h3>
                        <AudioPlayer src="https://music.yandex.by/album/11735202/track/69827710" 
                            showJumpControls={false} />
                    </div>
                </div>
                <div className="card-body item-description-details">
                        <p>
                            Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают 
                            на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих 
                            звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.
                        </p>
                    </div>
            </div>
        )
    }
}