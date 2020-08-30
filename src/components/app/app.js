import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import Player from '../player';
import ItemList from '../item-list';
import ItemDescription from '../item-description';
import Footer from '../footer';
import songData from '../data/data'


export default class App extends Component {

    state = {
        scoreCounter: 5,
        score: 0,
        counter: 0,
        genre: 'Pop',
        songsList: null,
        guessedSongId: null,
        guessedSong: null,
        selectedItem: null,
        isGuessed: false,
    };

    genreArr = songData.flat().map((e) => e.genre);
    bookmarks = this.uniqueGenre(this.genreArr);


    componentDidMount() {
        const songList = this.getSongsList(this.state.genre);
        this.getRandomSong(songList);
    };

    uniqueGenre(arr) {
        let result = [];
    
        for(let str of arr) {
            if(!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    };

    getSongsList(genre) {
        const listItem = songData.flat().filter((e) => e.genre === genre);
        this.setState({
            songsList: listItem
        });
        return listItem;      
    };

    getRandomSong(songList) {
        const id = Math.floor(Math.random()*6) + 1;
        const randomSong = songList.filter((song) => 
        song.id === id)[0];
        this.setState({
            guessedSongId: id,
            guessedSong: {
                artist: randomSong.artist,
                songName: randomSong.songName,
                image: randomSong.image,
                audio: randomSong.audio,
            }
        });
    }

    onItemSelected = (id) => {
        const {score, scoreCounter} = this.state;
        let scoreCounterCurrent = scoreCounter - 1;
        const scoreCurrent = score + scoreCounter;
        if(id === this.state.guessedSongId) {
            let counter = this.state.counter + 1;
            let genre = this.bookmarks[counter];
            this.setState({
                counter,
                genre,
                isGuessed: true,
                score: scoreCurrent,
            });
            
        }
        this.setState({
            selectedItem: id,
            scoreCounter: scoreCounterCurrent,
        });
        console.log(this.state.scoreCounter, score)
};

    changeLevel = () => {
        // let counter = this.state.counter + 1;
        // let genre = this.bookmarks[counter];
        this.setState({
            // counter,
            // genre,
            scoreCounter: 5,
            songsList: null,
            guessedSongId: null,
            guessedSong: null,
            selectedItem: null,
            isGuessed: false,    
        });
        this.componentDidMount();
    };

    reloadPage() {
        window.location.reload();
    }
    
    render() {
        if(this.state.counter === 6) {
            return(
                <div className="songbird-app-end">
                    <h1>Game over</h1>
                    <h2>Your score: {this.state.score}</h2>
                    <button type="button" onClick={() => this.reloadPage()} className="btn btn-success">Try again</button>
                </div>
            )
        }

        
        return(
            <div className="songbird-app">
                <Header bookmarks={this.bookmarks}
                        genre={this.state.genre}
                        score={this.state.score}/>
                <Player guessedSong={this.state.guessedSong}
                        isGuessed={this.state.isGuessed}/>
                <ItemList itemList={this.state.songsList}
                    onItemSelected={this.onItemSelected}
                    guessedSongId={this.state.guessedSongId}
                    selectedItem={this.state.selectedItem} />
                <ItemDescription selectedItem={this.state.selectedItem}
                                songList={this.state.songsList}/>
                <Footer isGuessed={this.state.isGuessed}
                        changeLevel={this.changeLevel}/>
            </div>
        )
    };
};