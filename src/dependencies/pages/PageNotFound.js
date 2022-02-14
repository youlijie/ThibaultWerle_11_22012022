import React, { Component } from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';

class Pagenotfound extends Component {
    render() {
        return (
            <div>
            <Logo   />
            <Navigation   />
            <div className="notfound">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to='/' exact  className={"backa"}>
                Retourner sur la page d’accueil
                </NavLink>
            </div>
            </div>
        );
    }
}

export default Pagenotfound;
