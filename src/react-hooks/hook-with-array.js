import React, {useState} from "react";

function HookWithArray () {
    const [items, setItems] = useState([])

    const addNumbers = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 100) + 1
        }])
    }
    return <div>
        <h1>Hooks With Array</h1>

        <ul>
            {
                items.map(item => (
                    <li key={item.id}>
                        {item.id}: {item.value}
                    </li>
                ))
            }
        </ul>

        <button
            className={'btn btn-primary'}
            onClick={addNumbers}
        >Add Number</button>
    </div>
}

export default HookWithArray