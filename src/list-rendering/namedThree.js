import React from 'react';

function NameListThree() {
    const persons = [
        {id: 1, name: 'sumit', skill: 'react'},
        {id: 2, name: 'amit', skill: 'angular'},
        {id: 3, name: 'aryan', skill: 'vue'},
        {id: 4, name: 'aarush', skill: '.net'},
    ]
    const personList = persons.map(person => {
        return <h2 key={person.id}>
            I am {person.name} <br/>
            I am {person.age} year old <br/>
            I know {person.skill} <br/>
        </h2>

    })
    return personList;
}

export default NameListThree;