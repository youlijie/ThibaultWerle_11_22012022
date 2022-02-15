import React, { Component } from 'react';

class Logement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas : {},
        }
    }

    async componentDidMount() {
        const data = require('../data/datas');
        this.setState({ datas: data });
        console.log(data);
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Logement;
