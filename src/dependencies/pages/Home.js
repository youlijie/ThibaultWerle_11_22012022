import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

class Home extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Navigation />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Home;
