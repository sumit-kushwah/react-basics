import React, {Component} from "react";

export class FakeUserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/users-list')
            .then(response => response.json())
            .then(json => this.setState({users: json}))
    }
    render() {
        return (
            <div>
                <h1> Users List </h1>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default FakeUserList;