
import React, { Component } from 'react';
import './plusBtn.css'
import Popup from "reactjs-popup";
import UploadPin from './uploadPin';
import axios from 'axios';


class PlusBtn extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

  }


  fileUploadedHandler = (props) => {
    console.log(this.selectedFile)
    console.log(this.props)

    const fd = new FormData();
    fd.append('upload_preset', 'shanylevy');
    fd.append('file', this.props)
    axios.post(' https://api.cloudinary.com/v1_1/pinterestcp/image/upload', fd)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      < Popup
        trigger={<button className='PlusBtn'> + </button>}
        modal
        closeOnDocumentClick >
        <h1 className='createPinHeader'>Create a Pin</h1>
        <UploadPin />
        {/* <input type='file' onChange={this.fileSelectedHandler}></input> */}
        <button type='submit' onClick={this.fileUploadedHandler} > Upldddoad  </button>
      </Popup>


    )
  }
}


export default PlusBtn;