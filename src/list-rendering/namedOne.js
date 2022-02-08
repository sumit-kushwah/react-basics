import React from 'react';

function NameListOne() {
    const names = ['sumit', 'kushwah', 'amit']
    return <div>
        <h1>Name List</h1>
        {
            names.map((name, index) => <h2 key={index}>{name}</h2>)
        }
    </div>
}

export default NameListOne;