import React, {Component} from "react";

class UserGreeting extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }


    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h1>Welcome Sumit</h1>
                </div>
            )
        }
        return <div>

            <h1>Welcome Guest</h1>
        </div>
    }
}

export default UserGreeting;