import  React, {Component} from "react";

export class SqlStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
            id: '',
            name: '',
            email: '',
            city: '',
        }
    }

    componentDidMount() {
        this.getStudents()
    }

    getStudents() {
        fetch('http://localhost:3001/api/students').then(
            res => res.json()
        ).then(
            json => this.setState({students: json})
        )
    }

    clearFields() {
        this.setState({ name: '', email: '', city: '' })
    }

    addStudent() {
        fetch('http://localhost:3001/api/students', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }).then(
            res => res.json()
        ).then(
            json => {
                this.getStudents();
                this.clearFields();
            }
        )
    }

    deleteStudent(id) {
        fetch(`http://localhost:3001/api/students/${id}`, {
            method: 'DELETE',
        }).then(
            res => res.json()
        ).then(
            json => this.getStudents()
        )
    }

    // editStudent(id) {
    //     fetch(`http://localhost:3001/api/students/${id}`).then(
    //         res => res.json()
    //     ).then(
    //         json => {
    //             const {_id, name, email, city} = json;
    //             this.setState({ _id, name, email, city })
    //         }
    //     )
    // }

    editStudent(data) {
        const {id, name, email, city} = data;
        this.setState({ id, name, email, city })
    }

    updateStudent() {
        fetch(`http://localhost:3001/api/students/${this.state.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }).then(
            res => res.json()
        ).then(
            json => {
                this.getStudents();
                this.clearFields();
            }
        )
    }

    render() {
        return <div className={'container'}>
            <h1>Student List Fetched From Mongo DB</h1>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <th>
                        <input
                            className={'form-control'}
                            type={'text'}
                            value={this.state.name}
                            onChange={(e) => this.setState({
                                name: e.target.value
                            })}
                        />
                    </th>
                    <th>
                        <input
                            className={'form-control'}
                            type={'text'}
                            value={this.state.email}
                            onChange={(e) => this.setState({
                                email: e.target.value
                            })}
                        />
                    </th>
                    <th>
                        <input
                            className={'form-control'}
                            type={'text'}
                            value={this.state.city}
                            onChange={(e) => this.setState({
                                city: e.target.value
                            })}
                        />
                    </th>
                    <td>
                        <button
                            className={'btn btn-primary'}
                            onClick={() => this.addStudent()}
                        >Add</button> &nbsp; &nbsp;
                        <button
                            onClick={() => this.updateStudent()}
                            className={'btn btn-warning'}>Update</button> &nbsp; &nbsp;
                    </td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.students.map(s => (
                        <tr key={s.id}>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>{s.city}</td>
                            <td>
                                <button
                                    onClick={() => this.editStudent(s)}
                                    className={'btn btn-primary'}>Edit</button> &nbsp; &nbsp;
                                <button
                                    onClick={() => this.deleteStudent(s.id)}
                                    className={'btn btn-danger'}>Delete</button> &nbsp; &nbsp;
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    }
}

export default  SqlStudent