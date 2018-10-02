
import React, { Component } from 'react';

import './headerLink.css'


class HeaderLink extends Component{
        render() {
          return (

                <div className="headerLinks">
                    <div className="homeLink"> 
                        <div className="home">Home</div>
                    </div> 
                    <div className="followingLink" > 
                        <div className="following">Following</div>
                    </div>  
                    <div className="exploreLink" >
                        <div className="explore">Explore</div>
                    </div>
                    <div className="userNameLink" >
                        <div className="userName">{this.props.name}</div>
                    </div>
                </div>    
    
            );
      
        }
    }
    
    export default HeaderLink;
