import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'



const Details = ({movies}) => {
  const navigate= useNavigate()
  const {idmovie} = useParams()
  const foundmovie = movies.find(el=> el.id === idmovie)
  
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{foundmovie.title}</ListGroup.Item>
        <ListGroup.Item>{foundmovie.description}</ListGroup.Item>
        <ListGroup.Item>
            <iframe src={foundmovie.trailerUrl}></iframe>
        </ListGroup.Item>
        
      </ListGroup>
    </Card>
    <Button variant="primary" onClick={()=>navigate('/')}>GO BACK TO HOME</Button>
    </div>
  )
}

export default Details