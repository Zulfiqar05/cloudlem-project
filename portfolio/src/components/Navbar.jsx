import React, { useState } from 'react'
import img1 from '../assests/images/Profilepic.jpeg'

function Navbar() {
    const [messageOne, setMessageOne]= useState("");
    const [messageTwo, setMessageTwo]= useState("");
    console.log(messageOne,messageTwo);

    // Fetch Api

    const CollectData = async () => {
        try {
          const response = await fetch('http://localhost:2001/message', {
            method: "POST",
            body: JSON.stringify({ messageOne, messageTwo }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.ok) {
            const result = await response.json();
            console.log('Data sent successfully:', result);
          } else {
            console.error('Failed to send data:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error sending data:', error);
        }
      }
      

    return (
    <div>
        
        <div class="Main-container">
        
        <header>
    
            <a href="#" class="logo">Zulfiqar Ali</a>
            <input type="checkbox" name="" id="menu-bar" />
            <label htmlFor="menu-bar">Menu</label>
    
    
    
            <nav class="navbar" >
                <ul>
    
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="./index.html">Skills +</a>
                        <ul>
                            <li><a href="./index.html">Services</a></li>
                            <li><a href="./index.html">Skills +</a>
                                <ul>
                                    <li><a href="./index.html">Html</a></li>
                                    <li><a href="./index.html">Css</a></li>
                                    <li><a href="./index.html">Javascript</a></li>
                                    <li><a href="./index.html">React</a></li>
                                </ul>
                            
                            </li>
                        </ul>
                    </li>
                    <li><a href="./index.html">Contact</a></li>
                    {/* <li><a href="./index.html">Gallery +</a>
                        <ul>
                            <li><a href="./index.html">grid gallery</a></li>
                            <li><a href="./index.html">flex gallery</a></li>
                        </ul>
                    <li><a href="./index.html"><button>Get Started</button></a></li>
                </li> */}
    
                </ul>
                
            </nav>
            


            
    
        
    
    
    
        </header>
    
    
        <div class="text-section">
    
            <div class="sub-text">
                <div>
                    <h1>Hey,Welcome:)</h1>
                <h1>Zulfiqar Ali</h1>
                <p class="para">Iam a Front-End Developer</p>
                <p className='para2'> Expert in Html,Css</p>
                <p className='para3'>JavaScript & React</p>
    
                <div className='buttondiv'>

                    <form>
                    <input type="text" name="text" id="" value={messageOne} onChange={(e)=>setMessageOne(e.target.value)}  /> 
                    <label >name</label>
                    <input type="text" name="texts" id="" value={messageTwo} onChange={(e)=>setMessageTwo(e.target.value)} /> 
                    <label >any message</label>
                    <button onClick={CollectData} type='button'>Submit</button>
                    </form>
                   


                </div>
                </div>
    
    
                <div class="img-1">
                  <img src={img1} />
                </div>
            </div>
    
            
    
    
    
        </div>
    
    
    </div>
      
    </div>
  )
}

export default Navbar
