import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{height:'300px', backgroundColor:'black' ,color:'dark'}} className='d-flex justify-content-center align-items-center w-100 flex-column '>
    <div className='d-flex justify-content-evenly  align-items-center w-100'>
      <div className='websites' style={{width:'400px'}}>
        <h4 className='mb-3'>
      
            shop
            </h4> 
            <h6>RazerStores</h6>
            <h6>RazerCafe</h6>
            <h6>Store Locator</h6>
            <h6>Purchase</h6>
            <h6>Programs</h6>
            <h6>Education</h6>
            <h6>Exclusives</h6>
            <h6>RazerStore</h6>
            <h6>Rewards</h6>
            <h6>Newsletter</h6>
            
      </div>
      <div className="link d-flex flex-column">
        <h4 className='mb-3'>Customer polices</h4>
        <Link to={'/'} style={{textDecoration:'none'}}>
         </Link>
        
        
            <h6>Technology</h6>
            <h6>Chroma RGB</h6>
            <h6>Concepts</h6>
            <h6>Beauty</h6>
            <h6>Esports</h6>
            <h6>collabse</h6>

          </div>


          <div className="link d-flex flex-column">
        <h4 className='mb-3'>Customer polices</h4>
        <Link to={'/'} style={{textDecoration:'none'}}>
         </Link>
        
         <h6>support</h6>
            <h6>Get Help</h6>
            <h6>Registration & Warranty</h6>
            <h6>RazerStore Support</h6>
            <h6>RazerCare</h6>
            <h6>Manage Razer</h6>
            <h6>ID</h6>
            <h6>Support Videos</h6>
            <h6>Accessibility Statement</h6>
           
           </div>

           
          <div className="link d-flex flex-column">
        <h4 className='mb-3'>company</h4>
        <Link to={'/'} style={{textDecoration:'none'}}>
         </Link>
        
        
            <h6>About Us</h6>
            <h6>Careers</h6>
            <h6>Newsroom</h6>
            <h6>zVentures</h6>
            <h6>Contact Us</h6>
           
           </div>


           <div className="link d-flex flex-column">
        <h4 className='mb-3'>company</h4>
        <Link to={'/'} style={{textDecoration:'none'}}>
         </Link>
        
        
            <h6><i class="fa-brands fa-instagram fa-2x"></i> </h6>
            <h6><i class="fa-brands fa-twitter fa-2x"></i></h6>
            <h6><i class="fa-brands fa-linkedin-in fa-2x"></i></h6>
            <h6><i class="fa-brands fa-facebook fa-2x"></i></h6>
           
           
           </div>

       <div className="guides d-flex flex-column">
      <h6 className='mb-3'>FOR GAMES BY</h6>
      
        </div>
      </div>
       </div>
       
       <div  style={{ backgroundColor:'black' }} className="d-flex justify-content-center align-items-center w-100 flex-column" >
        <hr />
        <h6 className='mb-2'>Copyright © 2023 Razer Inc. All rights reserved. Site Map| Legal Terms| Privacy |Policy| Cookie |Settings</h6>
        
          </div>
        
            
           
        
    
   
  </>


  )
}

export default Footer