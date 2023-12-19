import React, { useState } from 'react'

function Main() {
   const [message, setMessage] = useState("");
   
   
   console.log(message)

  return (
    <div>


        <div className='Sub-cont'>


          <div className='Text-main'>

          <h1>Courses We Offer!</h1> 

          </div>


          <div className='Cards-main'>

            <div className='card-1'>
              <h2>Web Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, consectetur</p>
              <button>Enroll Now</button>

            </div>


            <div className='card-2'>
              <h2>DevOps</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, consectetur</p>
              <button>Enroll Now</button>

            </div>



            <div className='card-3'>
              <h2>AWS</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, consectetur</p>
              <button>Enroll Now</button>

            </div>






          </div>





          <div className='Cards-main'>


            <div className='card-1'>
            <h2>UI/UX</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, consectetur</p>
            <button>Enroll Now</button>

           </div>


           <div className='card-2'>
           <h2>Digital Marketing</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, consectetur</p>
           <button>Enroll Now</button>

           </div>



           <div className='card-3'>
           <h2>Book Keeping</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, consectetur</p>
          <button>Enroll Now</button>

          </div>






            </div>

           <div className='last-input'>


            <form>

           <input type="message" name="message" id="" value={message} onChange={(e)=> setMessage(e.target.value)} />
           <label for="message"></label>
           <br />
           <button>Drop Your Cv Here</button>
            </form>


           </div>


           <div className='Footer'>

            <h2>All CopyRights Received @ 2024 </h2>

           </div>
             
            </div>
      


      

    </div>
  )
}

export default Main



