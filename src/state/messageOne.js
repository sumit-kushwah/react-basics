import React, { Component } from "react";

class MessageOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Ramanujan'
        }
    }


    render() {
        const {message} = this.props;
        return <div>
            <h1>{message} {this.state.name}</h1>
        </div>
    }
}

export default MessageOne;