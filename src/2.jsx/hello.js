import React from "react";

const Hello = () => {
    return (
        <div id='divId' className='header'>
            <h1 id='headId' className='headClass'>
                Hello Sumit Kushwah
            </h1>
        </div>
    )
}

// const Hello = () => {
//     return React.createElement('div', {
//         id: 'divId',
//         className: 'header'
//         },
//         React.createElement('h1', {
//             id: 'headId',
//             className: 'headClass'
//         }, 'summit'))
// }

export default Hello
