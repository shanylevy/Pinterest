import React, { Component } from 'react';
import ReactDropzone from "react-dropzone";
import Fragment from "react-dropzone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import './plusBtn.css'
import PlusBtn from './PlusBtn'

library.add(faCamera)


class UploadPin extends Component {
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

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
    })
  };

  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    }
      ;

    return (
      <div onChange={this.fileSelectedHandler} className="drop">
        <ReactDropzone
          accept="image/*"
          // onDrop={this.onPreviewDrop}
        >
          <FontAwesomeIcon className='cameraUpload' icon='camera' />
          Drag and drop or click to upload!
            </ReactDropzone>
        {this.state.files.length > 0 &&
          <Fragment>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
          
        }

        <PlusBtn seletedFile={this.fileSelectedHandler.bind(this)} />
        
      </div>
    );
  }
}

export default UploadPin;