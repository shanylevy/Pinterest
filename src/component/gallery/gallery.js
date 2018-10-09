import * as React from 'react';
import Masonry from 'react-masonry-component';
import  './gallery.css';
 
const masonryOptions = {
    transitionDuration: 0,
    fitWidth:true,
    React:true
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element){
           return (
                    <div className="box">
                        <img className="photo" src={element.src} />
                        <div className="photoTextDot">
                            <h1 className="photoText">{element.text}</h1>
                            <h1 className="dotsText">{element.DotsLink}</h1>
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
