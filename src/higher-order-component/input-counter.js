import React, {Component} from "react";
import UpdateCounter from "./update-counter";

export class InputCounter extends Component {

    render() {
        const {count, incrementCount} = this.props;
        return <div>
            <h1>Input Counter: {count}</h1>
            <input
                className={'form-control'}
                onChange={incrementCount}
            />
            <label>Input Box clicked {count} times</label>
        </div>
    }
}

export default UpdateCounter(InputCounter)