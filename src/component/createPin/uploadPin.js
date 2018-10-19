import React, { Component } from 'react'; 
import ReactDropzone from "react-dropzone";
import Fragment from "react-dropzone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import './plusBtn.css'

library.add(faCamera) 


class UploadPin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          files: [],
        };
      }
    
      onPreviewDrop = (files) => {
        this.setState({
          files: this.state.files.concat(files),
         });
      }
    
      render() {
        const previewStyle = {
          display: 'inline',
          width: 100,
          height: 100,
        };
    
        return (
          <div className="drop">
            <ReactDropzone 
              accept="image/*"
              onDrop={this.onPreviewDrop}
            >
          <FontAwesomeIcon className='cameraUpload' icon='camera'/>
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
          </div>
        );
      }
    }
  
  export default UploadPin;