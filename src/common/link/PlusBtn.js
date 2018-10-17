
import React, { Component } from 'react'; 
import './plusBtn.css'
import Popup from "reactjs-popup";
import UploadPin from './uploadPin'

     class PlusBtn extends Component{
        render (){   
          return (   
         < Popup 
          trigger={<button className='PlusBtn'> + </button>}
            modal
            closeOnDocumentClick >
            <h1 className='createPinHeader'>Create a Pin</h1>
            <UploadPin/>        
            <span> website </span>
            <button type='submit'> Upload  </button>
        </Popup>


     ) }}


export default PlusBtn;