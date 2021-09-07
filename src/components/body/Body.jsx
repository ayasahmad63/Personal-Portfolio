import React from "react"
import "../body/Body.css"
import About from "./bodyparts/about/About"
import Project from "./bodyparts/project/Project"
import Skill from "./bodyparts/skill/Skill"
import Contact from "./bodyparts/contact/Contact"


const Body =()=>{
    return(
        <div className="Body">
         <section id='About'>
         <About/>
         </section>
        <section id='Skill'>
        <Skill/>
        </section>
         <section id='Project'>
          <Project/>
         </section>
         <section id='Contact'>
             <Contact/>
         </section>


        </div>
    )
}

export default Body;