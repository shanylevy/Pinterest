
import React, { Component } from 'react';
import './headerLink.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import shany from '../../img/userPhoto.jpg';
import Tabs from '../../common/services/fontawesome'

library.add(faCommentDots)


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
                        <img className="userPhoto" src={shany}/> 
                        <div className="userName">{this.props.name}</div>
                    </div>
                    <div className="commentLink" >
                     <Tabs icon='comment-dots'/>
                    </div>
                    <div className="dotsLink" >
                     <Tabs icon='bell' />
                    </div>
                    <div className="bellLink" >
                    <Tabs icon='ellipsis-h' />
                    </div>
                </div>    
    
            );
      
        }
    }
    
    export default HeaderLink;
