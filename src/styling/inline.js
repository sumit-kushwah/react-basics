import React from 'react';

const heading = {
    color: 'blue',
    fontSize: '72px'
}

function Inline() {
    return <div>
        <h1 style={heading}>This is using heading</h1>
        <h2 style={{color: 'coral', fontSize: '36px'}}> This is using inline style</h2>
    </div>
}

export default Inline;