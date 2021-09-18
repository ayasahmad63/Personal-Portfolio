import React from "react"
import "../skill/Skill.css"
import { skills } from "../../../../components/data/skills.jsx"


const Skill = () => {
    const skillimg = require("../../../../assests/backgrounds/Skillbackground.svg").default;
    const skill = skills;
    const SkillBack2 = require("../../../../assests/backgrounds/SkillBack2.svg").default;
    return (
        <div className="Skill">
            <div className="Skill_Heading">
                SKILL
            </div>
            <div className="Skill_Content">
                <div className="Skill_Content_left">
                    <img src={SkillBack2} />
                </div>
                <div className="Skill_Content_right">
                    {skill.map((skill) => {
                        return (
                            <div className="SKill_Icons_Components">
                                <div className="SKill_Icons_Components_name">
                                    {skill.name}
                                </div>
                                <div className="SKill_Icons_Components_image">
                                    <img className="SKill_Icons_Components_image1" src={skill.image} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Skill;