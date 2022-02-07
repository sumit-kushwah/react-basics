import React, { Component } from "react";

class CounterOne extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    addCount() {
        // you can not do this
        // this.state.count++;
        this.setState({
            count: this.state.count + 1
        }, function() {
            console.log(this.state.count)
        });
    }

    render() {
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button className={'btn btn-primary'}
                    onClick={() => this.addCount()}
            >Increment</button>
        </div>
    }
}

export default CounterOne;