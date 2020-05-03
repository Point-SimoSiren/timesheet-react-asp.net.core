import React from 'react'
import { Form, Button } from 'react-bootstrap'

// Used for adding new assignments, state is in the app.js

const WaForm = ({ addWa, newIdCust, setNewIdCust, newTitle, setNewTitle, newDescription, setNewDescription, newDeadline, setNewDeadline }) => {
    return (

           <Form onSubmit={addWa}>
           <Form.Group>
            
                     <Form.Label>Asiakaskoodi</Form.Label>
                        <Form.Control type="number" value={newIdCust} name="IdCustomer"
                        onChange={({ target }) => setNewIdCust(target.value)} />
          
                     <Form.Label>Otsikko</Form.Label>
                        <Form.Control type="text" value={newTitle} name="Title"
                        onChange={({ target }) => setNewTitle(target.value)} />
            

                    <Form.Label>Kuvaus</Form.Label>
                        <Form.Control type="text" value={newDescription} name="Description"
                        onChange={({ target }) => setNewDescription(target.value)} />
          
                  <Form.Label>Dead-Line</Form.Label>
                        <Form.Control type="date" value={newDeadline} name="Deadline"
                     onChange={({ target }) => setNewDeadline(target.value)} />

                <Button variant="primary" type="submit">valmis</Button>
            
             </Form.Group>
            </Form>
         
    )
}

export default WaForm