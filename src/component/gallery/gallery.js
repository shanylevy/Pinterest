import * as React from 'react';
import Masonry from 'react-masonry-component';
import './gallery.css';
import Tabs from '../../common/services/fontawesome'
import { withRouter } from 'react-router-dom';
import pinPage from '../pinPage/pinPage'
import { Link, Route } from 'react-router-dom';



const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true,
    React: true
};

class Gallery extends React.Component {

    render() {
        const childElements = this.props.pins.map((pin) => {

            return (

                <div key={pin._id} className="box" >
                    <Link to= '/pinPage' >

                        <img className="photo" src={pin.src} />
                    </Link>

                    <div className="photoTextDot">

                        <span className="photoText">{pin.title} </span>
                        <span> <Tabs icon='ellipsis-h' /> </span>
                    </div>
                </div>


            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
        );
    }
}


export default withRouter(Gallery);
