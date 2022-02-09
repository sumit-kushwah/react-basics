import React, {Component} from "react";

export class ClickCounter extends Component {
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
            <h1>Counter: {this.state.count}</h1>
            <button
                className={'btn btn-primary'}
                onClick={() => this.incrementCount()}
            >Increment</button>
        </div>
    }
}

export default ClickCounter