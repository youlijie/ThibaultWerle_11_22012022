import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logement from '../components/Logement';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

class Home extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Navigation />
                <Header />
                <Logement />
                <Footer />
            </div>
        );
    }
}

export default Home;
