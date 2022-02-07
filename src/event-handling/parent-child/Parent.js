import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Parent'
        }
    }

    callParent = (childName) => {
        alert(`Calling ${this.state.name} from ${childName}`)
    }

    render() {
        return <div>
            <h1>Parent to child</h1>
            <Child callParent={this.callParent}/>
        </div>
    }
}

export default Parent;
