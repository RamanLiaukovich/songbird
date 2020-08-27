import React, { Component } from 'react';
import './player.css';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import songData from '../data/data'

export default class Player extends Component {

    // state = {};

    // componentDidMount() {
    //     console.log(this.props.guessedSong)
    //     this.setState({
    //         state: this.props.guessedSong,
    //     });
    // };

    // updateSong() {
    //     const { guessedSong, itemList } = this.props;
    //     console.log(itemList)
    //     // if(this.props.itemList) {
    //         console.log(this.props.itemList)
    //         const randomSong = itemList.filter((song) => 
    //         song.id === guessedSong)[0];
    //         console.log(randomSong);
    //         this.setState({
    //             artist: randomSong.artist,
    //             songName: randomSong.songName,
    //             image: randomSong.image,
    //             audio: randomSong.audio,
    //         });
    //     // };
    // };

    render() {
        if(this.props.guessedSong) {
            const { image, artist, songName, audio } = this.props.guessedSong;

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

        return(
            <div className="jumbotron player-wrapper">
            </div>
        )
    }
}