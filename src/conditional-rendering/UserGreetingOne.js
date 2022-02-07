import React, {Component} from "react";

class UserGreetingOne extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }

    }

    render() {
        //two
        // let msg = "";
        // if (this.state.isLoggedIn) {
        //     msg = <div><h1>Welcome Uma</h1></div>
        // } else {
        //     msg = <div><h1>Welcome Guest</h1></div>
        // }

        //three
        // this is using ternary condition
        // return <div>
        //     <h1> Welcome {
        //         this.state.isLoggedIn ? 'Uma' : 'Guest'
        //     }</h1>
        // </div>;

        // four
        return (
            this.state.isLoggedIn && <div><h1>Welcome Sumit</h1></div>
        )
    }
}

export default UserGreetingOne;