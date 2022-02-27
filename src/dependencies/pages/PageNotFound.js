import React, { Component } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

class Pagenotfound extends Component {
    render() {
        return (
            <div>
            <div className='nav'>
                <Logo />
                <Navigation />
            </div>
            <div className="notfound">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to='/' exact  className={"backa"}>
                Retourner sur la page d’accueil
                </NavLink>
            </div>
            <Footer />
            </div>
        );
    }
}

export default Pagenotfound;
