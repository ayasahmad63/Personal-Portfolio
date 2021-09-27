import React from "react"
import "../contact/Contact.css"
import { contact } from "../../../data/contact";
import emailjs from 'emailjs-com';


const Contact = () => {
    const image = require("../../../../assests/backgrounds/footer-wave-dark.svg").default;
    // const contacts = contact;
    // console.log(contact);
    const chat = require("../../../../assests/backgrounds/Chat.svg").default;
    return (
        <div className="Contact">
            <div className="Contact_Footer_Image">
                <img className="Contact_Footer_Image" src={image} />
            </div>

            <div className="Contact_Content">
                <div className="Contact_Content_left">
                    <div className="Contact_Content_left_header">
                        Connect With Me
                    </div>
                    <div className="Contact_Content_left_Middle_content">


                        <div className="Contact_Content_left_left">
                            {contact.map((contact) => {
                                return (
                                    <div className="Contact_Content_left_left_material">
                                        <div className="Contact_Content_left_left_icon">
                                            <a target="_blank" href={contact.link} ><img className="Contact_Content_left_left_icon" src={contact.icon} /></a>
                                        </div>
                                        <div className="Contact_Content_left_left_name">
                                            {contact.name}
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                        <div className="Contact_Content_left_right">
                            <img src={chat} />
                        </div>
                    </div>
                </div>
                {/* <div className="Contact_Content_right">
                  
                </div> */}
            </div>

        </div>
    )
}

export default Contact;