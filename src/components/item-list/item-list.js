import React, { Component } from 'react';
import './item-list.css';

import ItemDescription from '../item-description';

export default class ItemList extends Component {
    
    render() {
        const listItemClass = "list-group-item list-group-item-action";

        return(
            <div className="items">
                <div className="item-list">
                    <ul className="list-group">
                        <li className={listItemClass}>
                            <div className="indicator"></div>
                            Ворона
                        </li>
                        <li className={listItemClass}>
                            <div className="indicator"></div>
                            Сорока
                        </li>
                        <li className={listItemClass}>
                            <div className="indicator"></div>
                            Ястреб
                        </li>
                        <li className={listItemClass}>
                            <div className="indicator"></div>
                            Кукушка
                        </li>
                        <li className={listItemClass}>
                            <div className="indicator"></div>
                            Журавль
                        </li>
                        <li className={listItemClass}>
                            <div className="indicator"></div>
                            Лебедь
                        </li>
                    </ul>
                </div>
                <ItemDescription />
            </div>
        )
    };
};