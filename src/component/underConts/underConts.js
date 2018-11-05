import React, { Component, Fragment } from 'react';
import underContsPic from '../../img/underContsPic.jpg';
import Tabs from '../../common/services/fontawesome';
import { Link } from 'react-router-dom'
import '../../common/backHomeBtn.css'
import '../header/headerLink.css'




class UnderConts extends Component {


    render() {
        return (
            <Fragment>
                <Link to = '/'> 
                <div className="backHomeBtn">
                    <Tabs  className="backHomeBtn" icon='angle-left' />
                    <span > Home </span>
                </div>
            </Link>

                <img src={underContsPic} />
            </Fragment>
        )

    }

}

export default UnderConts;

