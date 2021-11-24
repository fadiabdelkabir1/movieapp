import React from 'react'
import './FilmGalery.css'
import { Rating } from '@mui/material'


export default function FilmGalery({SearchValue,rating,fakedata}) {
    
    const ToShow=fakedata.filter((item)=>(SearchValue=="" && item.rate>=rating)||(item.title.toLowerCase().includes(SearchValue.toLowerCase()) && item.rate>=rating)

    ).map((item)=>
    <li className="img-container d-flex justify-content-start m-3">
        <img src={item.url} alt='error' style={{height:300,width:250,margin:10}}></img>
        <div className="overlay justify-content-between" style={{color:'white',height:300,width:250,margin:10}}>
            <h1>{item.title}</h1>
            <Rating name="read-only" value={item.rate} readOnly />
            <p>{item.desc}</p>
        </div>
    </li>
    )
    return (
        <div >
            <ul  style={{listStyle:'none',flexWrap:'wrap',display:'flex'}}>{ToShow}</ul>
        </div>
    )
}
