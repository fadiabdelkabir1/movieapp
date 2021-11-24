import React from 'react'
import AddingForm from './AddingForm'
import FilterFilm from './FilterFilm'


export default function Header({SearchValue,setSearchValue,havor,setHavor,rating,setRating,fakedata,setfakedata}) {
        return (
        <div className='d-flex justify-content-between' >
            <div style={{margin:10,minWidth:450}}  >
                <FilterFilm SearchValue={SearchValue} setSearchValue={setSearchValue} setRating={setRating}></FilterFilm></div>
            <div style={{margin:10}} >
                <AddingForm fakedata={fakedata} setfakedata={setfakedata}></AddingForm></div>
        </div>
        );
    }
