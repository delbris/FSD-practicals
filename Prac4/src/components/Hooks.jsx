import { useState } from "react";

const Hooks = (props) =>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState({first:'', last:''})
    const [tempfirst, setFirst] = useState('')
    const [templast, setLast] = useState('')

    const updateNames = ()=>{
        setName({first:tempfirst, last:templast})
    }

    return(
        <div>
            <h1 className="Demo">This is demo React Hooks</h1>
            <h2>{props.title}</h2>
            <h2>First Name : {name.first}</h2>
            <h2>Last Name : {name.last}</h2>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(prev => prev>=10? 10 :prev + 1)}>Increment</button><br /><br />
            <button onClick={() => setCount(prev => prev<=0? 0 :prev - 1)}>Decrement</button> <br /><br />
            <input type="text" placeholder="First Name" onChange={(e)=> setFirst(e.target.value)}/> <br /><br />
            <input type="text" placeholder="Last Name" onChange={(e)=> setLast(e.target.value)}/> <br /><br />
            <button onClick={updateNames}>Update Names</button>
        </div>
    )
}

export default Hooks