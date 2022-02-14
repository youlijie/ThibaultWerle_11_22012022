import React, { Component } from 'react';
import logo from '../assets/logo/logo-kasa.png';

class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}

export default Logo;
