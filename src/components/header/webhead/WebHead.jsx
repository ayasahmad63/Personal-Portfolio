import React from "react"
import '../webhead/WebHead.css'

const WebHead=()=>{
    return(
        <div className="WebHead">
            <div className="web-options">
              
                  <a  className="web-anchor" href="#About">
                    <h2>Home</h2>
               </a>
         
             </div>
             <div className="web-options">
              
                  <a className="web-anchor" href="#Skill">
                    <h2>Tools and Skills</h2>
               </a>
         
             </div>
             <div className="web-options">
              
                  <a  className="web-anchor" href="#Project">
                    <h2>Projects</h2>
               </a>
         
             </div>
             <div className="web-options">
              
                  <a className="web-anchor"  href="#Contact">
                    <h2>Contact Me</h2>
               </a>
         
             </div>
        
        
        
        
        
        
        
        </div>
    )
}

export default WebHead;