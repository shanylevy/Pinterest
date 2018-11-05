import React, { Component } from 'react';
import './gallery.css';
import ReactHover from 'react-hover'
import Save from './save'
import Gallery from './gallery';
import elements from '../gallery/photo'



const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0
}

class Hover extends Component {


    render() {
        return (
            <ReactHover
                options={optionsCursorTrueWithMargin}>
                <ReactHover.Trigger type='trigger'>
                    <Gallery elements={elements} />
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover'>
                    <Save />
                </ReactHover.Hover>
            </ReactHover>
        );

    }
}

export default Hover;