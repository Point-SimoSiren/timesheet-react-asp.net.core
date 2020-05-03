import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'


const Buttons = ({ setShow, setNewPin }) => {

    const logOut = () => {
        setNewPin('xxxxx')
        setShow(4)
    }

    return(
      <>
         <ButtonGroup size="lg" className="mb-2">
         
            <Button variant="outline-secondary" onClick={() => setShow(2)}>Henkilöstö</Button>
             <Button variant="outline-secondary" onClick={() => setShow(1)}>Töiden listaus</Button>
             <Button variant="outline-secondary" onClick={() => setShow(3)}>Lisää työtehtävä tai henkilö</Button>
            </ButtonGroup>   

         <ButtonGroup size="lg" className="mb-2">
          <Button variant="outline-warning" onClick={() => logOut()}>Ulos</Button>
         </ButtonGroup>   
    </>
    )
}

export default Buttons

