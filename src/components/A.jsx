import React, { useState } from 'react'
import {} from "react-error-boundary"

function A() {
    const [count,setCount] = useState(0);

    if (count==4){
        throw new Error("Count is invalid");
    }

  return (
    <div>
        <h1 className='m-2' onClick={()=>setCount(count+1)}>Count is : {count}</h1>
        <button className='btn btn-primary m-2' onClick={()=>setCount(count+1)}>Increment</button>
        <button className='btn btn-danger m-2' onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default A