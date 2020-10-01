import React from "react";
import me from "../src/skills.json";
const Skills =() =>{
return (
  <div>
    <h1>SKILLS</h1>
    <ul>
      {me.skill.map((x)=>{
        return(<li>{x}</li>)
      })}
    </ul>
  </div>
);
}
export default Skills;