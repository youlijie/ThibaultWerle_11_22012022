import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className='navigation' >
                <NavLink to='/' exact  >
                    Accueil
                </NavLink>
                <NavLink to='/APropos' exact >
                    A Propos
                </NavLink>
            </div>
        );
    }
}

export default Navigation;
