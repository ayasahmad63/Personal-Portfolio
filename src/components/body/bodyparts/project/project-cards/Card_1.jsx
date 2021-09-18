// This project have Background image.

import React from "react"
import '../project-cards/Card_1.css'
import github from "../../../../../assests/socialicons/github.svg"
import liveproject from "../../../../../assests/socialicons/project-launch.svg"

const Card_1 = (props) => {

    const abouts = props.data.about;
    const icons = props.data.tags_icons;
    console.log(icons)
    return (
        <div className="Card_1">

            <div className="Card_1_Name">
                {props.data.title}
            </div>
            <div className="Card_1_Container">
                <div className="Card_1_left">
                    <div className="Card_1_Content">
                        {abouts.map((abouts) => {
                            return <div className="di"> <p>{abouts}  </p></div>
                        }
                        )}
                        <div className="Card_1_logo_anchors">
                            <a className="Card_1_anchor_github" href=""><img className="Card_1_icons_left" src={github} />Source Code</a>
                            <a className="Card_1_anchor_liveproject" href="">Live Project<img className="Card_1_icons_left" src={liveproject} /></a>
                        </div>
                    </div>
                    <div className="Card_1_anchors">

                    </div>
                    <div className="Card_1_tags">
                        {icons.map((icons) => {
                            return (
                                <div className="Card_1_tags_icons">
                                    <img src={icons} />
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className="Card_1_right">

                    <img className="Card_1_Image" src={props.data.image} />

                </div>
            </div>


        </div>
    )
}
export default Card_1;