import React, { useState } from "react"
import "../header/Header.css"
import MobileHead from "./mobilehead/MobileHead"
import WebHead from "./webhead/WebHead"


const Header = () => {
    const [isOpen,setIsOpen]=useState(false);
    const name = " <  Ayas  /> "
    return (
        <div className="Header">
            <div className="name"><h1>{name}</h1></div>
                 <div className="menu">
                        <div className="web-menu">
                            <WebHead />
                        </div>
                         <div className="mobile-menu">
                                <div  className="menuicon">
                                  <img  onClick={()=>{setIsOpen(!isOpen)}} src="https://img.icons8.com/fluency/48/000000/menu--v1.png"/>
                                 
                               
                                </div>
                   
                   
                           </div>
                   
                   
                     <div className="mob">
                    {isOpen?<MobileHead  isOpen={isOpen}  setIsOpen={setIsOpen} />:""}
                    </div>

            </div>


        </div>
    )
}
export default Header;