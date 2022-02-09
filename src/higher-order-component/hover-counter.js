import React, {Component} from "react";

export class HoverCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <div>
            <h1>Hover Counter: {this.state.count}</h1>
            <h2 onMouseOver={()=>this.incrementCount()}>H2 ELEMENT</h2>
        </div>
    }
}

export default HoverCounter