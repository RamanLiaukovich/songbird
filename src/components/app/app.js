import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import Player from '../player';
import ItemList from '../item-list';
import Footer from '../footer';

export default class App extends Component {
    render() {
        return(
            <div className="songbird-app">
                <Header />
                <Player />
                <ItemList />
                <Footer />
            </div>
        )
    };
};