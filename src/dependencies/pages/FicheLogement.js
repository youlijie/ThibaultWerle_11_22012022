import React, { Component } from 'react';
import Footer from '../components/Footer';
import HeaderLogement from '../components/HeaderLogement';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

class Fichelogement extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Navigation />
                <HeaderLogement />
                <Footer />
            </div>
        );
    }
}

export default Fichelogement;
