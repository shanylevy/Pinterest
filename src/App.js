import React, { Component } from 'react';
import './component/header.css';
import Header from './component/mainHeader';
import Gallery from './component/gallery/gallery.js';
import PlusBtn from './common/link/createPin'
import CreatePin from './common/link/createPin'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        pins:[{
      }]
    }
  }  

componentDidMount(){
  fetch("/api/pins")
  .then (data => data.json())
  .then(pins => this.setState({...this.state,pins: pins}))
}

  render() {
    return ( <div>
      <Header  />
      <Gallery pins={this.state.pins} />
      <CreatePin/>


</div>
    );
  }
}

export default App;
