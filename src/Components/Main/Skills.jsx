import React, { Component } from 'react';

export class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
      <h3 className="skills-heading">Skills: </h3>
      <div className="skills-section" >
        <FrontEnd />
        <BackEnd />
        <APIDesign />
        <OtherSkills />
        <ElectronicSkills />
      </div>
      </div>
    )
  }
}


const FrontEnd = () => {
  return (
    <div className="front-end-skills" >
    <h4>Frontend :</h4>
    <ul>
      <li>JavaScript (ES6)</li>
      <li>ReactJs</li>
      <li>Apollo React (GraphQL)</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>jQuery</li>
      <li>Bootstrap</li>
      <li>Materialize</li>
    </ul>
    </div>
  )
}

const BackEnd = () => {
  return (
    <div className="back-end-skills">
    <h4>Backend :</h4>
    <ul>
      <li>Python (2 and 3)</li>
      <li>Django</li>
      <li>Graphene Python/Django (GraphQL)</li>
      <li>Flask</li>
      <li>NodeJS</li>
      <li>Express</li>
      <li>MySQL/ SQLAlchemy / Sqlite3</li>
      <li>NoSQL (Firebase)</li>
    </ul>
    </div>
  )
}

const APIDesign = () => {
  return (
    <div className="api-design-skills">
    <h4>API Design: </h4>
    <ul>
      <li>RESTful</li>
      <li>GraphQL</li>
    </ul>
    </div>
  )
}

const ElectronicSkills = () => {
  return (
    <div className="electronic-skills">
    <h4>Microcontrollers and the world of IoT :) </h4>
      <ul>
        <li>Arduino</li>
        <li>NodeMcu</li>
        <li>Raspberry Pi</li>
        <li>One Wire Sensors</li>
        <li>I2C Sensors</li>
      </ul>
    </div>
  )
}

const OtherSkills = () => {
  return (
    <div className="other-skills">
    <h4>Other skills :</h4>
    <ul>
      <li>C / C++</li>
      <li>Java</li>
      <li>PHP</li>
      <li>WordPress</li>
      <li>Git</li>
      <li>Vim/ cURL / Postman / Httpie </li>
      <li>Linux</li>
      <li>Bash / Command Prompt / Powershell</li>
      <li>GitHub/ BitBucket</li>
      <li>Webpack</li>
      <li>Babel</li>
      <li>JSON / XML</li>
      <li>Atom/ VS Code/ SublimeText/ Jupiter Kernel/ JetBrains PyCharm/ WebStorm</li>
    </ul>
    </div>
  )
}
