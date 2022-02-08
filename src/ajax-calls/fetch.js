import React, {Component} from "react";

export class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.setState({todos: json}))
    }
    render() {
        return (
            <div>
                <table className={'table'}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Completed??</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? 'Yes' : 'No'}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}