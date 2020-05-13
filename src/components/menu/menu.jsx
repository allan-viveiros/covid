import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

import './menu-style.css';
import Home from '../../pages/home';
import Tips from '../../pages/tips';
import Tracker from '../../pages/tracker';


function Menu() {


    return(
        <div className="main-menu">                 
            <ul>
                <li>
                    <NavLink exact to="/" className="nav-link" activeClassName="active"> Home </NavLink>
                </li>

                <li>
                    <NavLink to="/tips" className="nav-link" activeClassName="active"> Tips </NavLink>
                </li>

                <li>
                    <NavLink to="/tracker" className="nav-link" activeClassName="active"> Tracker </NavLink>
                </li>                
            </ul>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tips" component={Tips} />
                <Route path="/tracker" component={Tracker} />
            </Switch>
        </div>
    );
}


export default Menu;