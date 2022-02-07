import React from "react";

function Greeting (props) {
    const { name, role, age, children } = props;
    console.log(props)
    return <div>
        <h1>Hello { name } : { role } : {age}</h1>
        {children}
    </div>
}

export default Greeting;