import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom'
import gallery from '../gallery/gallery';
import axios from 'axios';
import userPic from '../../img/userPhoto.jpg';


class ProfilePage extends Component {
   

    render() {
        return (
                <Fragment>
              <h1>ffffff</h1>

              <ima src={userPic} > </ima>
            </Fragment>
        )

    }

}


export default ProfilePage;

