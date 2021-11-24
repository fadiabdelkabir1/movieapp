import React from 'react'
import StarFilterCompo from './starFilterCompo'

export default function FilterFilm({SearchValue,setSearchValue,setRating}) {
    //const [TheSearch, setTheSearch] = useState('')
    
    return (
        
        <div className='d-flex '>
            <input type="text" className="form-control" value={SearchValue} onChange={(event)=>{setSearchValue(event.target.value)}} style={{maxWidth:300}} placeholder="Type to search..."/>
            <StarFilterCompo setRating={setRating}></StarFilterCompo>
        </div>
        
    )
}
