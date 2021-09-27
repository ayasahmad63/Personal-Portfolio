import React from "react";
import "../about/About.css";
import Social_Contact from "../../../common/social-contact/Social-Contact";

const About = () => {
    return (
        <div className="About">
            <div className="About-left">
                <div className="about-us">
                    <h1 className="h1">
                        <span className="Hi">Hi,</span>I'm AYAS <br />
                    </h1>

                    <div className="content">
                        <h2 className="h2">A FullStackDeveloper</h2><br />
                        <p className="p">A Full Stack Developer and  Enthusiastic Competetive Coder.I enjoy solving complex problems.I have a passion when it comes to coding, debugging and developing elegant softwares and sites.I am focused, devoted, hard-working and keen to learn in a changing and demanding environment.
                        </p>
                    </div>

                </div>
                <div className="Social-logo"><Social_Contact /></div>
                <div className="link">

                </div>

            </div>

            <div className="About-right">
                <div className="image-section">
                    <img className="about-image" src={require('../../../../assests/images/Programming2.svg').default} />
                </div>
            </div>


        </div>
    )
}
export default About;