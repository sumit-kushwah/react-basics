import React, {Component} from "react";

function Person(props) {
    const {id, name, age, skill} = props.person;
    return <React.Fragment>
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{skill}</td>
            </tr>
        </React.Fragment>
}

export default Person;