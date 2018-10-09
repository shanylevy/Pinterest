
import React, { Component } from 'react';
import './headerLink.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisH) 

class DotsLink extends Component{
  
    render() {
      return (

                <div className="commentLink" >
                 <FontAwesomeIcon icon='ellipsis-h'/>
                </div>
        );
  
    }
}

export default DotsLink;