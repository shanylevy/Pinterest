
import React, { Component } from 'react';
import '../../component/header/headerLink.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH , faCommentDots, faBell} from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisH, faCommentDots,faBell) 

const Tabs = (props)=>{ 
    return (

              <div className="commentLink" >
               <FontAwesomeIcon icon={props.icon}/>
              </div>
      );

  }

  export default Tabs;
