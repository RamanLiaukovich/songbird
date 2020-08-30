import React, { Component } from 'react';
import './player.css';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import songData from '../data/data'

export default class Player extends Component {

    state = {
        image: "https://droidmania.ru/sites/default/files/downloads/title-2015/1_865.png",
        artist: "****",
        songName: "****",
    };


    componentDidMount() {
        this.openName();
    };

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.openName();
        }
    }

    openName() {
        if(this.props.isGuessed) {
            const { image, artist, songName } = this.props.guessedSong;
            console.log('Guessed!')
            this.setState({
                image,
                artist,
                songName
            });
        } else {
            this.setState({
                image: "https://droidmania.ru/sites/default/files/downloads/title-2015/1_865.png",
                artist: "****",
                songName: "****",        
            })
        }
    }

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

            const { audio } = this.props.guessedSong;

            if(this.props.isGuessed) {

            }

            return(
                <div className="jumbotron player-wrapper">
                    <div className="img-container">
                        <img src={ this.state.image } alt="item"/>
                    </div>
                    <div className="player-container">
                        <h2 className="item-name">{ this.state.artist } - { this.state.songName }</h2>
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