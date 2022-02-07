import React, {Component} from "react";

class Welcome extends Component {
    render() {
        const {message, author} = this.props;
        return <div>
            <h1>{message} {author}</h1>
        </div>
    }
}

export default Welcome;