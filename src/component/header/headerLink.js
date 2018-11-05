
import React, { Component } from 'react';
import './headerLink.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import userPic from '../../img/userPhoto.jpg';
import Tabs from '../../common/services/fontawesome'
import { Link } from 'react-router-dom'


library.add(faCommentDots)


class HeaderLink extends Component {
    render() {
        return (

            <div className="headerLinks">
                <div className="homeLink">
                    <Link to='/' className="home">Home</Link>
                </div>
                <div className="followingLink" >
                <Link to='/underconts' className="following">Following</Link>
                </div>
                <div className="exploreLink" >
                    <Link to='/underconts' className="explore">Explore</Link>
                </div>

                <Link to='/shany' className="userNameLink">
                    <img className="userPhoto" src={userPic} />
                    <div className="userName">{this.props.name}</div>
                </Link>
                <div className="commentLink" >
                    <Tabs icon='comment-dots' />
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
