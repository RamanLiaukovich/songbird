import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {


    render() {

        let key = 1;
        const {bookmarks} = this.props;

        const listItems = bookmarks.map((bookmark) => 
            <li className="btn btn-success" key={key++}>{bookmark}</li>)

        return(
            <div className="header">
                <div className="first-line">
                    <h1>Guess the singer</h1>
                    <h3>Score: 0</h3>
                </div>
                <div className="bookmarks">
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    };
};