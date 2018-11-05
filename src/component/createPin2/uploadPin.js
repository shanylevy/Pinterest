
import React, { Component } from 'react';
import '../createPin/plusBtn.css'
// import UploadPin from './uploadPin';
import axios from 'axios';


class UploadPin extends Component {

  fileUploadedHandler = (props) => {

    console.log(this.props);
    const file = this.props

    const fd = new FormData();
    fd.append('upload_preset', 'shanylevy')
    fd.append('file', file)
    axios.post('https://api.cloudinary.com/v1_1/pinterestcp/image/upload', fd)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(file))
  }

  render() {
    return (
    <div>
        <button type='submit' onClick={this.fileUploadedHandler} > Upldoad  </button>
</div>
    )
  }
}



export default UploadPin;