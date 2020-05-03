import React from 'react'

const Employees = ({ employees, search }) => employees.map(e => {

    const ciLastName = e.lastName.toLowerCase()
    return ciLastName.indexOf(search) > -1 ? (
        <tr key={e.idEmployee} className="table-striped">

                    <td>{e.lastName}</td>
                    <td >{e.firstName}</td>
                    <td>{e.phoneNumber}</td>
            </tr>
    ) : null
})
export default Employees