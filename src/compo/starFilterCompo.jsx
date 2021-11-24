import React,{useState} from 'react'
import { Rating } from '@mui/material'

const StarFilterCompo=({setRating}) =>{
    const [ratinValue, setratinValue] = useState(1)
    
    return (
        <div>
            <Rating
                        name="simple-controlled"
                        value={ratinValue}
                        onChange={(event, ratinValue) => {
                            setRating(ratinValue);setratinValue(event.target.value)
                        }}
                        />
        </div>
    )
}
export default StarFilterCompo

