import React , {useState} from "react";

function HookCounter () {
    const [count, setState] = useState(0)
    const incrementCount = () => {
        setState(count + 1)
    }
    return <div >
        <h1>Function Count: {count}</h1>

        <button
            className={'btn btn-primary'}
            onClick={incrementCount}
        >Increment</button>
    </div>
}

export default HookCounter