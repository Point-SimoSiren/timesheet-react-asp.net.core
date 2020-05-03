import React from 'react'

const Wassignments = ({ wassignments, search }) => wassignments.map(wa => {

    //Jos laittaa person.name[0] , niin hakee vain ensimmäistä kirjainta
    //mutta tämä on paljon parempi hakutapa.
    const ciTitle = wa.title.toLowerCase()
    return ciTitle.indexOf(search) > -1 ? (
        <tr key={wa.idWorkAssignment} className="table-striped">

            <td>{wa.idCustomer}</td>
               <td >{wa.title}</td>
               <td>{wa.description}</td>
               <td>Valmis: {wa.completed? 'KYLLÄ' : 'EI'}</td>
               <td>Deadline: {wa.deadline}</td>
         </tr>

    ) : null
})
export default Wassignments