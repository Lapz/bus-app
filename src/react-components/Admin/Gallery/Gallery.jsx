import React, {Component} from 'react';
import axios from 'axios';

class Gallery extends Component {

    constructor() {
        this.state = {
            imagesUrl: []
        };
    }

    render() {
        return (
            <div></div>
        );
    }

    componentDidMount() {
        axios
            .get()
            .then((response) => {
                this.setState({imagesUrl: response.data.urls})
            })
    }

}

export default Gallery;