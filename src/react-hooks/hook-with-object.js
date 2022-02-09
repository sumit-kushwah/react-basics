import React, {useState} from 'react';

function HookWithObject () {
    const [name, setName] = useState({firstName: '', lastName: ''})

    return <div>
        <h1>Hook with object</h1>
        <label>Firstname</label>
        <input className={'form-control w-50'}
               value={name.firstName}
               onChange={(e) => setName({...name, firstName: e.target.value})}
        />
        <label>Lastname</label>
        <input className={'form-control w-50'}
               value={name.lastName}
               onChange={(e) => {
                   setName({...name, lastName: e.target.value
                   })
               }}
        />

        <h2>Your firstname is : {name.firstName}</h2>
        <h2>Your lastname is : {name.lastName}</h2>
    </div>
}

export default HookWithObject