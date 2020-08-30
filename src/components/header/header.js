import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {

    render() {

        let key = 1;
        const {score} = this.props;
        const {bookmarks, genre} = this.props;
        const listItems = bookmarks.map((bookmark) => {
            const clazz = genre === bookmark ? "btn btn-success disabled" : "btn btn-success";
            return <li className={clazz} key={key++}>{bookmark}</li>  
        });

        return(
            <div className="header">
                <div className="first-line">
                    <h1>Guess the singer</h1>
                    <h3>Score: {score}</h3>
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