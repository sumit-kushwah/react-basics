import React, {useState, useEffect} from "react";

function ApiHook () {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            res => res.json()
        ).then(
            data => setUsers(data)
        )
    }, [])
    return <div >
        <h1>List of users fetched using hooks</h1>
        <table className={'table'}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
}

export default ApiHook