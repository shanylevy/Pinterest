import React, { Component } from 'react';
import '../createPin/plusBtn.css'
import UploadPin from './uploadPin'


class CatchUrl extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        files: [],
      };
    }
    fileSelectedHandler = event => {
      this.setState({
        selectedFile: event.target.files[0]
  
      })
      console.log(event.target.files[0])
  
    }
 
  
    render(){
      return (
        <div onChange={this.fileSelectedHandler} className="drop">  
          <UploadPin seletedFile={this.selectedFile} />
          
        </div>
      );
    }
  }
  
  export default CatchUrl;