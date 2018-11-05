import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom'
import gallery from '../gallery/gallery';
import axios from 'axios';


class PinPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pin: {},
        }
    }
    componentDidMount() {
        console.log(this.props)
        fetch("/api/pins")
        .then(data => data.json())
        .then(pin => this.setState({ ...this.state, pin: pin }))
    }

    render() {
        return (
                <Fragment>
                <a href='/' className="home">  Home </a>
                <div className = 'pin-content'> 
                        <img src = {this.state.pin.src} alt="" />
                    {/* <div className = 'pin-details'>
                        <h1> { this.state.pin.title } </h1>
                        <p> { this.state.pin.body } </p>
                    </div> */}
                </div>
            </Fragment>
        )

    }

}


export default PinPage;

