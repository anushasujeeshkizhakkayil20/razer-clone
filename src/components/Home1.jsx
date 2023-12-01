import React from 'react'
import { Col, Row } from 'react-bootstrap'
import main5 from'../Assets/main5.webp'
import car from '../Assets/car.jpg'
import ProjectCard from './ProjectCard'



function Home1() {
  return (
    <Row>
        <Col>
    <div style={{height:'700px', width:'1500px',  backgroundColor:'black',color:'gray'}} className='d-flex justify-content-center align-items-center flex-column background-cover '>
   <p>RazerStore Rewards Giveaway: Become a member and stand to win both the Razer Kitsune and the PlayStation 5. Join Now </p>
      <div style={{height:'700px', width:'1700px', backgroundColor:'black' ,color:'gray' }}className='d-flex justify-content-center align-items-center flex-column background-cover'>
      <h2>CYBER RAMPAGE IMMINENT</h2>
      <h6>UNLOCK EARLY ACCESS</h6>
      
      <img src="./home.jpg" alt="no image"  />
    </div>
    </div>

    <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center'>
      <img src={ main5} alt="" />
    </div>

    <div style={{width:'100%', height:'100vh',backgroundColor:'black'}} className='d-flex justify-content-center background-size-cover'>
      <img src={ car} alt="" />
    </div>

    <div style={{backgroundColor:'black'}}className='mt-12 all-project justify-content-center w-100'>
      <h1 className='text-center'></h1>
       
      <div className='d-flex  mt-5 container mt-5 mb-5 d-flex justify-content-center align-items-center w-100'>
        <div className='card w-100 d-flex justify-content-evenly'  >
         <ProjectCard/>
        </div>
        <div className='card  w-100 d-flex justify-content-evenly'>
         <ProjectCard/>
        </div>
        
        </div>
      <div style={{backgroundColor:'black'}} className='text-center mt-5'>
   
      </div>
      


    </div>
    
   </Col>
    </Row>

  )
}

export default Home1