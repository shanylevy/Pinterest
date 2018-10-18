import * as React from 'react';
import Masonry from 'react-masonry-component';
import  './gallery.css';
import HeaderTabs from '../../component/headerTabs'

 
const masonryOptions = {
    transitionDuration: 0,
    fitWidth:true,
    React:true
};
 
class Gallery extends React.Component {
    
      handleClick(){
        console.log('this is:', this);
      }

    render() {
        const childElements = this.props.pins.map((pin)=>{
           return (
                    <div key={pin._id} className="box" onClick={this.handleClick}>
                        <img className="photo" src={pin.src} />
                        <div className="photoTextDot">
                            <span className="photoText">{pin.title} </span>
                            <span> <HeaderTabs icon='ellipsis-h' /> </span>
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

 
export default Gallery;
