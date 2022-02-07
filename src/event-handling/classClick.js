import React, {Component} from "react";

class ClassClick extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler() {
        console.log('class handle clicked')
    }

    render() {
        return <div>
            <h1>Using class component</h1>
            <button
                className={'btn btn-danger'}
                onClick={this.clickHandler}
            > Click </button>
        </div>
    }
}

export default ClassClick;