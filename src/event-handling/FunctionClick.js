import React from 'react';

function FunctionClick() {
    function clickHandler() {
        console.log('clicked')
    }
    return <div>
        <h1>Using Function component</h1>
        <button
            className={'btn btn-danger'}
            onClick={clickHandler}
        > Click </button>
    </div>
}
export default FunctionClick;