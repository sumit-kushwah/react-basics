import React, {Component} from "react";

const UpdateCounter = (OriginalComponent) => {

    return class NewComponent extends Component {
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
            return <OriginalComponent
                count={this.state.count}
                incrementCount = {() => this.incrementCount()}
            />
        }
    }
}

export default UpdateCounter