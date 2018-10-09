
import React, { Component } from 'react';
import './headerLink.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

library.add(faCommentDots) 

class CommentLink extends Component{
  
    render() {
      return (

                <div className="commentLink" >
                 <FontAwesomeIcon icon='comment-dots'/>
                </div>
        );
  
    }
}

export default CommentLink;