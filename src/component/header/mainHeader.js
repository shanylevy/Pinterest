import React, { Component } from 'react';
import './header.css';
import Search from './search'
import Logo from './logo';
import HeaderLink from './headerLink';

class Header extends Component {
    render() {
        return (

            <div className="containerHeader">
                <Logo />
                <Search />
                <HeaderLink name='Shany' />

            </div>


        );

    }
}

export default Header;
