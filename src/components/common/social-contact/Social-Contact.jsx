import React from "react"
import '../social-contact/Social-Contact.css'
import {SocialData} from '../../data/social'

const Social_Contact =()=>{
    const data=SocialData;
    console.log(data)
    return(
        <div className="Socials">
        <div className="Social-Icons">
          {data.map((item,index)=>{
              return(
             <a href={item.link}>
              <div className="Social-Icon-div">
                  <img  className="Social-Icon "  key={index} src={item.icon}/>
              </div>
             </a>
              )
          })}
        </div>
        <div className="two_anchors">
            
        <a className="Firsr-Anchor"  href="#Contact">
        <img className="First-Anchor-Img" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-contact-contact-flatart-icons-solid-flatarticons.png"/> GET IN TOUCH  
               </a>
            <a  className="Second-Anchor" href=" ">
            <img className="Second-Anchor-Img" src="https://img.icons8.com/material-rounded/24/000000/resume.png"/> SEE MY RESUME
                </a>
        </div>
        </div>

    )

}
export default Social_Contact;