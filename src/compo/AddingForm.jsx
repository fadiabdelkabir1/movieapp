import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

export default function AddingForm({fakedata,setfakedata}) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [filmtitle, setTitle] = useState('')
        const [Filmrating, setFilmrating] = useState()
        const [filmurl, setFilmurl] = useState('')
        const [filmdescript, setFilmdescript] = useState('')

        const onAdd =()=> {
            setfakedata([...fakedata,{title:filmtitle,rate:Filmrating,url:filmurl,desc:filmdescript}])
            setTitle('');
            setFilmrating(1);
            setFilmurl('');
            setFilmdescript('');
            }

    
        return (
        <>
            <Button variant="primary" onClick={handleShow}>
            Add a new Film
            </Button>
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Film description</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div class="form-group">
                <label >Title</label>
                <input class="form-control" value={filmtitle} onChange={(e)=>{setTitle(e.target.value)}}
                type="text" placeholder="Please enter the film title"/>
            </div>
            <div class="form-group">
                <label >Rate</label>
                <input class="form-control" type="number" value={Filmrating} onChange={(e)=>{setFilmrating(e.target.value)}}
                placeholder="Please enter the film Rating"/>
            </div>
            <div class="form-group">
                <label >Poster Link</label>
                <input class="form-control" type="text" value={filmurl} onChange={(e)=>{setFilmurl(e.target.value)}}
                placeholder="Please enter the film Poster Link"/>
            </div>
            <div class="form-group">
                <label >Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value={filmdescript} onChange={(e)=>{setFilmdescript(e.target.value)}}
                rows="3"  placeholder="Please enter the film description"></textarea>
            </div>
            </Modal.Body>
            
            
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cancel
                </Button>
                <Button variant="primary"  onClick={onAdd}>
                Add
                </Button>
            </Modal.Footer>
            </Modal>
        </>
        );
    }
