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
        genre: `90's`,
        songsList: null,
        guessedSongId: null,
        guessedSong: null,
        selectedItem: null,
    };

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
        this.setState({
            selectedItem: id,
        });
    };
    

    render() {
        const genreArr = songData.flat().map((e) => e.genre);
        const bookmarks = this.uniqueGenre(genreArr);
    console.log(this.state);
        return(
            <div className="songbird-app">
                <Header bookmarks={bookmarks}/>
                <Player guessedSong={this.state.guessedSong}/>
                <ItemList itemList={this.state.songsList}
                    onItemSelected={this.onItemSelected}/>
                <ItemDescription selectedItem={this.state.selectedItem}/>
                <Footer />
            </div>
        )
    };
};