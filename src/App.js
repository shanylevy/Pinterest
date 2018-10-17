import React, { Component } from 'react';
import './component/header.css';
import Header from './component/mainHeader';
import Gallery from './component/gallery/gallery.js';
import elements from './component/gallery/photo.js'
import Hover from './component/gallery/hover';
import PlusBtn from './common/link/createPin'
import CreatePin from './common/link/createPin'

class App extends Component {
  render() {
    return ( <div>
      <Header  />
      <Gallery elements={ elements } />
      <CreatePin/>
      <Hover  />



</div>
    );
  }
}

export default App;
