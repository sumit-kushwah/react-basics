import React, {Component} from "react";
import axios from "axios";

export class AxiosApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios('https://jsonplaceholder.typicode.com/todos')
            .then(res => this.setState({todos: res.data}))
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

export default AxiosApi;