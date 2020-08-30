import React, { Component } from 'react';
import './item-list.css';


// import songData from '../data/data'

export default class ItemList extends Component {

    // state = {
    //     songsList: null,
    // };

    // componentDidMount() {
    //     this.getSongsList(this.props.genre);
    // }



    renderItems(arr) {
        const { guessedSongId, selectedItem } = this.props;
        console.log(guessedSongId, selectedItem);
        const listItemClass = "list-group-item list-group-item-action";

        if(arr) {
            return arr.map(({id, artist}) => {
                return(
                    <li className={listItemClass} key={id} onClick={() => this.props.onItemSelected(id)}>
                        <div className="indicator"></div>
                        {artist}
                    </li>
                );
            });
        }
    };

    render() {
        // console.log(this.state);

        // const { genre } = this.props;
        // const itemsList = this.getSongsList(genre);
        const items = this.renderItems(this.props.itemList);

        return(
            <ul className="list-group">
                {items}
            </ul>
        )
    };
};