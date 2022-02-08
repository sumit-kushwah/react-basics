import React, {Component} from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        console.log('constructor is callled')
        this.state = {}
    }

    static getDerivedStateFromProps() {
        console.log('get derived is called')

    }

    componentDidMount() {
        console.log('Componenet did mount called')
    }

    render() {
        console.log('render called')
        return <div>
            <h1>Life Cycle Events</h1>
            <LifeCycleB/>
        </div>
    }
}

export default LifeCycleA;