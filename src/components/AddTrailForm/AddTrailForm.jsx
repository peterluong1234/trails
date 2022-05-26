// import { PresignedPost } from 'aws-sdk/clients/s3';
import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';

export default function AddTrailForm(props){
    const [selectedFile, setSelectedFile] = useState('')
    const [state, setState] = useState({
        name: '',
        start: '',
        end: '',
        type: ''
    })

    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
      }
    
    
      function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }
    
      function handleSubmit(e){
        e.preventDefault()
                 
        const formData = new FormData()
        formData.append('photo', selectedFile)
        formData.append('name', state.name)
        formData.append('start', state.start)
        formData.append('end', state.end)
        formData.append('type', state.type)
        props.handleAddTrail(formData);
        // Have to submit the form now! We need a function!
      }
    

    return(
          
    <Grid textAlign='center' verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Segment>
        <h1>Create a New Trail</h1>
          <Form  autoComplete="off" onSubmit={handleSubmit}>
             <Form.Input
                className="form-control"
                name="name"
                value={state.name}
                placeholder="name"
                onChange={handleChange}
                required
                />   
            <Form.Input
                className="form-control"
                name="start"
                value={state.start}
                placeholder="start"
                onChange={handleChange}
                required
            />   
            <Form.Input
                className="form-control"
                name="end"
                value={state.end}
                placeholder="end"
                onChange={handleChange}
                required
            />   
            <Form.Input
                className="form-control"
                name="type"
                value={state.type}
                placeholder="type"
                onChange={handleChange}
                required
            />   
            <Form.Input
              className="form-control"
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleFileInput}
            />   
            <Button
              type="submit"
              className="btn"
            >
              ADD TRAIL
            </Button>
          </Form>
        </Segment>
    </Grid.Column>
  </Grid>
 

    )
}
