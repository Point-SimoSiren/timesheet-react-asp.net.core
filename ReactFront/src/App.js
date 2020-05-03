import React, { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm'
import Wassignments from './components/Wassignments'
import Employees from './components/Employees'
import waService from './services/wa'
import employeeService from './services/employee'
import WaForm from './components/WaForm'
import EmployeeForm from './components/EmployeeForm'
import Buttons from './components/Buttons'
import { Table, Form, Button } from 'react-bootstrap'

const App = () => {

    const [wassignments, setWassignments] = useState([])
    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState('')
    const [show, setShow] = useState(4)

    const [newIdCust, setNewIdCust] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newDeadline, setNewDeadline] = useState('2020-01-01')
    const [newPin, setNewPin] = useState('xxxxxx')


    /*
    const [errorMessage, setErrorMessage] = useState(null)
    const [isPositive, setIsPositive] = useState(true)*/

    useEffect(() => {
        waService
            .getAll()
            .then(initialWassignments => {
                setWassignments(initialWassignments)
            })
    }, [])

    useEffect(() => {
        employeeService
            .getAll()
            .then(initialEmployees => {
                setEmployees(initialEmployees)
            })
    }, [])

    //Hakukenttään tulee arvoksi aina pienet kirjaimet
    const handleSearchInputChange = (event) => {
        setSearch(event.target.value.toLowerCase())
    }

    // ------- wa formin käsittelijä-------------

    const addWa = (event) => {
        event.preventDefault()
        let newObject = {
            idCustomer: parseInt(newIdCust),
            title: newTitle,
            description: newDescription,
            deadline: newDeadline,
            createdAt: new Date(),
            active: true
        }

        waService
            .create(newObject)
            .then(response => {
                alert("Work assignment added! Refresh the list.", response)
                window.location.reload()
            })
    }


    // --------------RIGHT PIN--------
    const rightPin = 'a12345'

    //------PIN CHECK---------------

const pinCheck = (newPin, rightPin) => {
    
    if (newPin == rightPin) {
        setShow(1)
    }
}

        //--------RENDERING------------------------------

        if (show == 4) {
            return (

                <Form onSubmit={pinCheck(newPin, rightPin)}>
                    <Form.Group>

                        <Form.Label>Anna pin koodi</Form.Label>
                        <Form.Control type="text"
                            onChange={e => setNewPin(e.target.value)} />

                    </Form.Group>
                </Form>

            )
        }
    


   else if (show == 1) {
        return (
            
            <div class="container">

                <Buttons setShow={setShow} setNewPin={setNewPin} />
                <h2>Työtehtävät</h2>


                <FilterForm search={search} handleSearchInputChange={handleSearchInputChange} />

                <Table striped>
                <tr>
                    <th>Asiakaskoodi</th>
                    <th>Otsikko</th>
                    <th>Kuvaus</th>
                    <th>Työ valmis</th>
                    <th>Dead-line</th>
                </tr>

                <tbody>
                <Wassignments wassignments={wassignments} search={search} />
                 </tbody>
            </Table>

                </div>
           
            )
    }

   else if (show == 2)
   {
        return (

            <div class="container">

                <Buttons setShow={setShow} setNewPin={setNewPin} />

                <h2>Työntekijät</h2>

                <FilterForm search={search} handleSearchInputChange={handleSearchInputChange} />

                <Table striped>
                    <tr>
                        <th>sukunimi</th>
                         <th>etunimi</th>
                         <th>Puhelin</th>
                    </tr>
                    <tbody>
                        <Employees employees={employees} search={search} />
                    </tbody>
                  </Table>
             </div>
            )

    }
   else
    {
     return (

         <div class="container">

             <Buttons setShow={setShow} setNewPin={setNewPin} />

             <h2>Henkilön lisääminen</h2>

             <EmployeeForm employees={employees} setEmployees={setEmployees} />

             <h2>Työtehtävän lisääminen</h2>

                 <div>
                   <WaForm addWa={addWa} newIdCust={newIdCust} setNewIdCust={setNewIdCust} newTitle={newTitle} setNewTitle={setNewTitle} newDescription={newDescription} setNewDescription={setNewDescription} newDeadline={newDeadline} setNewDeadline={setNewDeadline} /> 
                 </div>
               
         </div >
                   )
              }
}

export default App