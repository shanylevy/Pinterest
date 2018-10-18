import React, { Component } from 'react';
import './component/header.css';
import Header from './component/mainHeader';
import Gallery from './component/gallery/gallery.js';
import elements from './component/gallery/photo.js'
import Hover from './component/gallery/hover';
import PlusBtn from './common/link/createPin'
import CreatePin from './common/link/createPin'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        pins:[{
          "_id" : ("5bc70803466f37f300298503"),
          "src" : "https://i.pinimg.com/564x/3b/1d/5d/3b1d5dc9bb3e8d2f8922f4d9d42e2860.jpg",
          "text" : "dddddd"
      }]
    }
  }  

componentDidMount(){
  fetch("/api/pins")
  .then (response => response.json())
  .then(data => this.setState({
    pins: [...this.state.pins, ...data]
}))};

  render() {
    return ( <div>
      <Header  />
      <Gallery pins={this.state.pins} />
      <CreatePin/>
      <Hover  />



</div>
    );
  }
}

export default App;
