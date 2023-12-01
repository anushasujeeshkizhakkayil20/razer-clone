import React from 'react'
import Card from 'react-bootstrap/Card';


function ProjectCard() {
  return (
    <>
    <Card className='d-flex justify-content-evenly   align-items-center w-100 mt-5'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB46AkEKjBWf5imm1t-H81TgCAtsKGp-dgg&usqp=CAU" alt="no image"/>
     
      

      <Card.Body>
      
      </Card.Body>
    </Card>
    <Card className='d-flex justify-content-evenly   align-items-center w-100'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0JCzd9JeG3BcrHB5dn9hwq-ygiMU_0xujg&usqp=CAU" alt="no image"/>
     
      

      <Card.Body>
      
      </Card.Body>
    </Card>
    
    </>
  )
}

export default ProjectCard