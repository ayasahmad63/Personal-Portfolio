import React from "react"
import "../home/Home.css"
import Header from "../header/Header";
import Body from "../body/Body";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <div className="Home">

            <div className="Header-Component"> <Header /> </div>
            {/* <div className="Body-Component"> <Body /> </div> */}
            <div className="Footer-Component"> <Footer /> </div>

        </div>
    )
}

export default Home;