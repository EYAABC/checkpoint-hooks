import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const AddMovie = ({AddNewMovie}) => {
  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: '',
    description:'',
    posterUrl:'',
    rating:'' 
  })
  
  const HandleChange = (e)=>{
    setNewMovie({...newMovie, [e.target.name] : e.target.value})
  }

  const HandleRateChange = (e,newValue)=>{
    setNewMovie({...newMovie, rating:newValue })
  }

  const Adding = ()=>{
    AddNewMovie(newMovie)
    handleClose()
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control onChange={HandleChange} name='title' type="text" placeholder="Enter title" />
          <Form.Control onChange={HandleChange} name='description' type="text" placeholder="Enter Description" />
          <Form.Control onChange={HandleChange} name='posterUrl' type="text" placeholder="Enter Poster Url" />
          <Rating onChange={HandleRateChange} max={10} name="rating" defaultValue={0} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={Adding} variant="primary">
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;