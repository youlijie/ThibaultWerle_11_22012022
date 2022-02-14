import React, { Component } from 'react';
import image from "../assets/home-picture.png"

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1> Chez vous, partout et ailleurs </h1>
                <img src={image} alt="Chez vous, partout et ailleurs" />
            </div>
        );
    }
}

export default Header;
