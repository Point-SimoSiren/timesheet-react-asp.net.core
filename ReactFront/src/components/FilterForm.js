import React from 'react'
import { Form } from 'react-bootstrap'

const FilterForm = ({ search, handleSearchInputChange }) => {
    return (
        <Form>
         <Form.Group>

                <Form.Label>Haku:</Form.Label>

                <Form.Control value={search} onChange={handleSearchInputChange} />

            </Form.Group>
        </Form>
        
    )
}
export default FilterForm

