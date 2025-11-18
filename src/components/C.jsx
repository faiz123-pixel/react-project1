import React, { useEffect, useState } from 'react'
import axios from "axios"

function C() {
  const [products,setProducts] = useState(null);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setProducts(res.data.products))
        
    },[]);
  return (
    <div>
        {products && products.map((p,index)=>(
            <div key={index} className=''>
            <h1>{p.id}</h1>
            <p>{p.title}</p>
            <img src={p.images} className='w-50' alt="" />
            <hr/>
            </div>
        ))}
    </div>
  )
}

export default C