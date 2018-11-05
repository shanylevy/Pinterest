
import React from 'react';
import '../../component/header/headerLink.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH , faCommentDots, faBell, faAngleLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisH, faCommentDots,faBell,faAngleLeft
    ) 

const Tabs = (props)=>{ 
    return (

               <FontAwesomeIcon icon={props.icon}/>
      );

  }

  export default Tabs;
