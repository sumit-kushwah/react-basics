import React, {Component} from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }
        // this.changeMessage = this.changeMessage.bind(this);
    }

    // 4th approach
    changeMessage = () => {
        console.log(this)
        this.setState({
            message: 'Thank You!!'
        });
    }

    render() {
        return <div>
            <h1>{this.state.message}</h1>
            {/*<button*/}
            {/*    className={'btn btn-primary'}*/}
            {/*    onClick={this.changeMessage}*/}
            {/*>Change Message</button>*/}
            {/*<button*/}
            {/*    className={'btn btn-primary'}*/}
            {/*    onClick={this.changeMessage.bind(this)}*/}
            {/*>Change Message</button>*/}
            {/*<button className={'btn btn-primary'}*/}
            {/*    onClick={() => this.changeMessage()}*/}
            {/*>Change Message</button>*/}
            {/*can not use this*/}
            {/*<button*/}
            {/*    className={'btn btn-primary'}*/}
            {/*    onClick={function() { this.changeMessage()}}*/}
            {/*>Change Message</button>*/}
            <button
                className={'btn btn-primary'}
                onClick={this.changeMessage}
            >Change Message</button>
        </div>
    }
}

export default EventBind;