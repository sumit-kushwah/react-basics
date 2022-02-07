import React, { Component } from "react";
import MessageOne from "./messageOne";

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sumit',
            message: 'Welcome',
            data: []
        }
    }

    subscribe() {
        this.setState({
            message: 'Thank you for subscribing.'
        })
    }
    render() {
        return <div>
            <h1>{this.state.message} {this.state.name}</h1>
            <button className={'btn btn-primary'}
                    onClick={() => this.subscribe()}
            >Subscribe</button>
            <MessageOne message={this.state.message}/>
        </div>
    }
}

export default Message;