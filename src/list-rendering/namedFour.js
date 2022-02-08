import React from 'react';
import Person from "./person";

function NameListFour() {
    const persons = [
        {id: 1, name: 'sumit', age: 12, skill: 'react'},
        {id: 2, name: 'amit', age: 23, skill: 'angular'},
        {id: 3, name: 'aryan', age: 45, skill: 'vue'},
        {id: 4, name: 'aarush', age: 34,  skill: '.net'},
    ]

    return (
        <div>
            <h1>List of Names</h1>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skill</th>
                </tr>
                </thead>
                <tbody>
                {
                    persons.map((person, index) => <Person key={index} person={person}/>)
                }
                </tbody>
            </table>
        </div>
    )
}

export default NameListFour;