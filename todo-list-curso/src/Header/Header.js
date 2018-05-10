import React from 'react';

import './Header.css';
import CardList from '../CardList/CardList';
import CardCreate from '../CardCreate/CardCreate'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const header = (props) => {
    return (
        <Router>
            <div>
                <div className="header">
                    <div className="contenedor-rutas">
                        <div className="ruta"><Link to={'/'}>Home</Link></div>
                        <div className="ruta"><Link to={'/cardList'}>CardList</Link></div>
                        <div className="ruta"><Link to={'/cardCreate'}>CardCreate</Link></div>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={CardList}/>
                    <Route path="/cardList" component={CardList}/>
                    <Route path="/cardCreate/:cardId?/:title?" component={CardCreate}/>
                </Switch>
            </div>
        </Router>
    )
};

export default header;
