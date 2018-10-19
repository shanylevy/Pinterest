import React, { Component } from 'react';
import  './logo.css';
import img from '../../img/logo.png';


class Logo extends Component{
    render() {
      return (
        <div className="containerLogo">

            <a href="https://www.pinterest.com">
            <img className="img-logo" alt="logo" src={img} ></img></a>
    </div>

        );
  
    }
}

export default Logo;
