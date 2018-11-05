
import React, { Component } from 'react';
import '../createPin/plusBtn.css'
import Popup from "reactjs-popup";
import CatchUrl from "./catchUrl";
import Dropzone from "./dropzone";




class CreatePin extends Component {
 

  render() {
    return (
      < Popup
        trigger={<button className='PlusBtn'> + </button>}
        modal
        closeOnDocumentClick >
        <h1 className='createPinHeader'>Create a Pin</h1>
             <Dropzone >

             </Dropzone >

      </Popup>


    )
  }
}


export default CreatePin;