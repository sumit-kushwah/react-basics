import React, { Component } from "react";

class Counter extends  Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(this.props, props)
    }
    render() {
        console.log(this.props)
        return <div>

        </div>
    }
}

export default Counter;