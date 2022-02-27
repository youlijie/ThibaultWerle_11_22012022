import React, { Component } from 'react';
import AboutInfo from '../components/AboutInfo';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

class About extends Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <Logo />
                    <Navigation />
                </div>
                <AboutInfo />
                <Footer />
            </div>
        );
    }
}

export default About;
