import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {

    bookmarks = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    render() {
        return(
            <div className="header">
                <div className="first-line">
                    <h1>Songbird</h1>
                    <h3>Score: 0</h3>
                </div>
                <div className="bookmarks">
                    <ul>
                        <li className="btn btn-success">Разминка</li>
                        <li className="btn btn-success disabled">Воробьиные</li>
                        <li className="btn btn-success disabled">Лесные птицы</li>
                        <li className="btn btn-success disabled">Певчие птицы</li>
                        <li className="btn btn-success disabled">Хищные птицы</li>
                        <li className="btn btn-success disabled">Морские птицы</li>
                    </ul>
                </div>
            </div>
        )
    };
};