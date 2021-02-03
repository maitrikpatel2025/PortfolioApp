import React, { Component } from "react";

import "./Skill.css";
import { Skill_List } from "./Skill_list";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="Skills">
        <div className="container_1">
          <div className="row justify-content-center">
            {Skill_List.map((skills_list) => {
              return (
                <div className="col-lg-4 col-md-12">
                  <div className="skill_1">
                    <div className="S1" key={skills_list}>{skills_list.Skills_title}</div>
                    <div className="Skill_list">
                      {skills_list.Skills.map((skill) => {
                        return <li className="S2" key={skill}>{skill}</li>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
