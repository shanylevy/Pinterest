import * as React from 'react';
import Masonry from 'react-masonry-component';
import  './gallery.css';

 
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
        const childElements = this.props.pins.map((pins)=>{
           return (
                    <div key={this.props._id} className="box" onClick={this.handleClick}>
                        <img className="photo" src={this.props.src} />
                        <div className="photoTextDot">
                            <span className="photoText">{this.props.text} </span>
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
