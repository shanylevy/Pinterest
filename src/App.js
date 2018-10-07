import React, { Component } from 'react';
import './component/header.css';
import Header from './component/mainHeader';
import Gallery from './component/gallery/gallery.js';
import elements from './component/gallery/photo.js'


class App extends Component {
  render() {
    return ( <div>
      <Header  />
      <Gallery elements={ elements } />


</div>
    );
  }
}

export default App;
