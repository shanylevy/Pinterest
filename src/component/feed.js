import React, { Component } from 'react';
import Gallery from './gallery/gallery';
import { BrowserRouter } from 'react-router-dom'


class Feed extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pins: [{
            }]
        }
    }

    componentDidMount() {
        fetch("/api/pins")
            .then(data => data.json())
            .then(pins => this.setState({ ...this.state, pins: pins }))
    }

    render() {
        return (
            <BrowserRouter>
                <Gallery pins={this.state.pins} />
            </BrowserRouter>

        )

    }

}

export default Feed;