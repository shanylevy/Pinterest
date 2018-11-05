import React, { Component } from 'react';
import './logo.css';
import img from '../../img/logo.png';
import { Link } from 'react-router-dom'


class Logo extends Component {
    render() {
        return (
            <div className="containerLogo">

                <Link to ='/' >
                    <img className="img-logo" alt="logo" src={img} ></img>
                </Link>    
            </div>

        );

    }
}

export default Logo;
