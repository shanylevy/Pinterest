import * as React from 'react';
import Masonry from 'react-masonry-component';
import  './gallery.css';
 
const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element){
           return (
               <div className="gallerycontainer">
                    <div className="image-element-class">
                        <img className="photo" src={element.src} />
                    </div>
                    <div className="image-element-class">
                        <img className="photo2" src={element.src} />
                        <img className="photo3" src={element.src} />
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
                imagesLoadedOptions={imagesLoadedOptions} // default {}

            >
                {childElements}
            </Masonry>
        );
    }
}

 
export default Gallery;