import { Rating } from '@mui/material'
import React from 'react'
import { Form } from 'react-bootstrap'

const Filtre = ({setRate,setSearch}) => {
  return (
    <div style={{display:'flex'}}>
         <Form.Control onChange={(e)=> setSearch(e.target.value)} style={{width:'300px'}} type="text" placeholder="Enter title" />
         <Rating onChange={(e,newValue)=> setRate(newValue)} max={10} name="rating" defaultValue={0} />
    </div>
  )
}

export default Filtre