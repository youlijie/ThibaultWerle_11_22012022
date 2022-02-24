import React, { Component } from 'react';
import AboutInfo from '../components/AboutInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

class About extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Navigation />
                <Header />
                <AboutInfo />
                <Footer />
            </div>
        );
    }
}

export default About;
