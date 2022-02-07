import React, {Component} from "react";

class EventBindOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }
        // this.changeMessage = this.changeMessage.bind(this);
    }

    // 4th approach
    changeMessageUsingBind(msg) {
        console.log(this)
        this.setState({
            message: msg
        });
    }

    changeMessageUsingFatArrow(msg) {
        console.log(this)
        this.setState({
            message: msg
        });
    }


    render() {
        return <div>
            <h1>{this.state.message}</h1>


            <button
                className={'btn btn-primary'}
                onClick={this.changeMessageUsingBind.bind(this, 'This is using bind')}
            >Change Message-Bind</button>
            <br/>
            <hr/>
            <button
                className={'btn btn-primary'}
                onClick={() => this.changeMessageUsingFatArrow('this is using fat arrow')}
            >Change Message-Fat Arrow</button>
        </div>
    }
}

export default EventBindOne;