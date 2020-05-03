import React, { useState } from 'react'
import employeeService from '../services/employee'
import { Form, Button } from 'react-bootstrap'

const EmployeeForm = ({ employees, setEmployees }) => {

    const [newIdContractor, setNewIdContractor] = useState('')
    const [newFirstname, setNewFirstname] = useState('')
    const [newLastname, setNewLastname] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')

    const addEmployee = (event) => {
        event.preventDefault()
        let newObject = {
            idContractor: parseInt(newIdContractor),
            firstName: newFirstname,
            lastName: newLastname,
            phoneNumber: newPhoneNumber,
            active: true,
            createdAt: new Date()
        }

        employeeService
            .create(newObject)
            .then(response => { 
                console.log(response.data)
                window.location.reload()
            })
    }

    return (

        <Form onSubmit={addEmployee}>
            <Form.Group>

                <Form.Label>Alihankkijakoodi</Form.Label>
                <Form.Control type="number" value={newIdContractor} name="IdContractor"
                    onChange={({ target }) => setNewIdContractor(target.value)} />

                <Form.Label>Etunimi</Form.Label>
                <Form.Control type="text" value={newFirstname} name="firstName"
                    onChange={({ target }) => setNewFirstname(target.value)} />


                <Form.Label>Sukunimi</Form.Label>
                <Form.Control type="text" value={newLastname} name="lastName"
                    onChange={({ target }) => setNewLastname(target.value)} />

                <Form.Label>Puhelin</Form.Label>
                <Form.Control type="text" value={newPhoneNumber} name="phoneNumber"
                    onChange={({ target }) => setNewPhoneNumber(target.value)} />

                <Button variant="primary" type="submit">valmis</Button>

            </Form.Group>
        </Form>

    )
}

export default EmployeeForm