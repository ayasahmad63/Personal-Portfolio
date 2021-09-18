import React from "react"
import "../project/Project.css"
import { ProjectData } from "../../../data/project"
import Card_1 from "./project-cards/Card_1"
import Card_2 from "./project-cards/Card_2"
import Wave from '../../../../assests/backgrounds/wave.svg'
import WaveReverse from '../../../../assests/backgrounds/wavereverse.svg'


const Project = () => {
    const data = ProjectData;
    // console.log(data);
    return (
        <div className="Projects">
            <div className="label">
                <h1>PROJECTS</h1>
            </div>
            <div className="Project-Show">
                {data.map((data) => {
                    if (data.id % 2 == 0) {
                        return <Card_2 data={data} />;
                    }
                    else {
                        return <div ><img className="Class_1_Wave" src={Wave} /> <Card_1 className="Card_11" data={data} /><img className="Card_1_Bottom" src={WaveReverse}></img></div>
                    }

                })}
            </div>


        </div>
    )
}

export default Project;