import React, { Component } from 'react';
import './component/header.css';
import Header from './component/mainHeader';
import Gallery from './component/gallery/gallery.js';
import elements from './component/gallery/photo.js'
import Hover from './component/gallery/hover';
import BellLink from './component/bellLink';


class App extends Component {
  render() {
    return ( <div>
      <Header  />
      <Gallery elements={ elements } />
      <Hover  />



</div>
    );
  }
}

export default App;
