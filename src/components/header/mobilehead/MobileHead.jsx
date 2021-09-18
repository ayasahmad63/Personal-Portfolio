import React from "react"
import '../mobilehead/MobileHead.css'

const MobileHead = (props) => {
    const { isOpen, setIsOpen } = props;
    return (
        <div className="MobileHead">
            <div className="close-icon ">
                <img src="https://img.icons8.com/color/48/000000/delete-property.png" alt="" onClick={() => { setIsOpen(!isOpen) }} />


                {/* <hr style="height:2px;border-width:0;color:gray;background-color:white" /> */}
            </div>
            <div className="line"><img src="https://img.icons8.com/fluency/48/000000/horizontal-line.png" alt="" /></div>
            <div className="mob-options">

                <div className="mob-option">
                    <div className="img">
                        <img src="https://img.icons8.com/office/48/000000/home--v2.png" aly="" />
                    </div>

                    <div className="name">
                        <a className="mobile-anchor" href="#About" onClick={() => { setIsOpen(!isOpen) }}>

                            <h4>Home</h4>
                        </a>
                    </div>

                </div>
                <div className="mob-option">
                    <div className="img"><img src="https://img.icons8.com/fluency/48/000000/communication-skill.png" alt="" /></div>
                    <div className="name">
                        <a className="mobile-anchor" href="#Skill" onClick={() => { setIsOpen(!isOpen) }}>
                            <h4>Tools and Skills</h4>
                        </a>
                    </div>
                </div>
                <div className="mob-option">
                    <div className="img"><img src="https://img.icons8.com/fluency/48/000000/group-of-projects.png" alt="" /></div>
                    <div className="name">
                        <a className="mobile-anchor" href="#Project" onClick={() => { setIsOpen(!isOpen) }}>
                            <h4>Projects</h4>
                        </a>
                    </div>
                </div>
                <div className="mob-option">
                    <div className="img"><img src="https://img.icons8.com/color/48/000000/contact-card.png" alt="" /></div>

                    <div className="name"><a className="mobile-anchor" href="#Contact" onClick={() => { setIsOpen(!isOpen) }}>
                        <h4>Contact Me</h4>
                    </a>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default MobileHead;
