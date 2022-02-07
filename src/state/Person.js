import React, { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sumit',
            city: 'Mainpuri',
            isAdmin: true
        }
    }
    render() {
        const {name, city, isAdmin} = this.state;
        return <div>
            <h1>Name : {name}</h1>
            <h1>City : {city}</h1>
            <h1>IsAdmin : {isAdmin ? 'True': 'False'}</h1>
        </div>
    }
}

export default Person;