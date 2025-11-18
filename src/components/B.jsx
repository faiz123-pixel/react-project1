import React, { useEffect, useState } from 'react'
import axios from "axios"

function B() {
    const [products,setProducts] = useState(null);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProducts(res.data))
    },[]);
  return (
    <div>
      <h1>hii.</h1>
        {products && products.map((p,index)=>(
            <div key={index}>
            <h1>{p.id}</h1>
            <p>{p.title}</p>
            <img src={p.image} alt="" />
            <hr/>
            </div>
        ))}
    </div>
  )
}

export default B