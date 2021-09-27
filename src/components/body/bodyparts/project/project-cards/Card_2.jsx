// This project have Background image.

import React from "react"
import '../project-cards/Card_2.css'
import github from "../../../../../assests/socialicons/github.svg"
import liveproject from "../../../../../assests/socialicons/project-launch.svg"

const Card_2 = (props) => {

    const abouts = props.data.about;
    const icons = props.data.tags_icons;
    console.log(icons)
    return (
        <div className="Card_2">

            <div className="Card_2_Name">
                {props.data.title}
            </div>
            <div className="Card_2_Container">
                <div className="Card_2_right">

                    <img className="Card_2_Image" src={props.data.image} />

                </div>
                <div className="Card_2_left">
                    <div className="Card_2_Content">
                        {abouts.map((abouts) => {
                            return <div className="di"> <p>{abouts}  </p></div>
                        }
                        )}
                        <div className="Card_2_logo_anchors">
                            <a className="Card_2_anchor_github" target="_blank" href={props.data.github}><img className="Card_2_icons_left" src={github} />Source Code</a>
                            <a className="Card_2_anchor_liveproject" target="_blank" href={props.data.liveproject}>Live Project<img className="Card_2_icons_left" src={liveproject} /></a>
                        </div>
                    </div>
                    <div className="Card_2_anchors">

                    </div>
                    <div className="Card_2_tags">
                        {icons.map((icons) => {
                            return (
                                <div className="Card_2_tags_icons">
                                    <img src={icons} />
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>


        </div>
    )
}
export default Card_2;