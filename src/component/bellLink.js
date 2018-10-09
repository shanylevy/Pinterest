
import React, { Component } from 'react';
import './headerLink.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faBell) 

class BellLink extends Component{
  
    render() {
      return (

                <div className="bellLink" >
                 <FontAwesomeIcon icon='bell'/>
                </div>
        );
  
    }
}

export default BellLink;