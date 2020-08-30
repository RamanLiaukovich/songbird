import React, { Component } from 'react';
import './item-description.css';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class ItemDescription extends Component {

    state = {
        song: null,
    };

    componentDidMount() {
        this.updateSong();
    };

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.updateSong();
        }
    }

    updateSong() {
        const { selectedItem, songList } = this.props;
        if (!selectedItem) {
            this.setState({
                song: null,
            });
            return
        };

        const selectedSong = songList.filter((song) => song.id === selectedItem)[0];
        this.setState({
            song: selectedSong,
        });
    };

    render() {

        if(!this.state.song) {
            return(
                <div className="card text-white bg-secondary mb-3 item-description-container">
                    <h3>Listen to the song and guess the artist from the list</h3>
                </div>
            )
        };

        const {artist, songName, description, image, audio, } = this.state.song;

        return(
            <div className="card text-white bg-secondary mb-3 item-description-container">
                <div className="item-description-header card-header">
                    <img src={ image } alt="item"/>
                    <div className="item-description-title">
                        <h3>{artist} - {songName}</h3>
                        <AudioPlayer src={audio}
                            autoPlayAfterSrcChange={false}
                            showJumpControls={false} />
                    </div>
                </div>
                <div className="card-body item-description-details">
                        <p>{description}</p>
                    </div>
            </div>
        );
    };
};