import React, { Component} from "react";

export class LifeCycleB extends  Component {
    constructor(props) {
        super(props);
        console.log('constructor B is callled')
        this.state = {}
    }

    static getDerivedStateFromProps() {
        console.log('get derived B is called')

    }

    componentDidMount() {
        console.log('componenet  B did mount called')
    }

    render() {
        console.log('render B called')
        return "hello B"
    }
}

export default LifeCycleB;