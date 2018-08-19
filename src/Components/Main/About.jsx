import React, { Component } from 'react';

import linux from './faIcons/linux.svg'
import python from './faIcons/python.svg'
import jsIcon from './faIcons/jscript.svg'


class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-container">
        <div className="about-me-intro">
        <p>Full Stack Developer | Problem Solver |
        <img src={jsIcon} height="30" width="30" alt=""/>
        const JavaScript Lover </p>
        <p>
        <img src={python} height="30" width="30" alt=""/>
        __Pythonista__ |
        <img src={linux} height="30" width="30" alt=""/>
        Open Source Enthusiast </p>
        <p>Coffee/Pizza/Beer/Rock/Metal Lover </p><br/>
        </div>


            <p>
            I always like to approach things in a different way, be it coding, or listening to experimental new music apart from Rock and Metal. <br/><br/>
            Previously, i worked as a Full Stack Developer in a creative agency developing their backend and frontend apps for Fan Engagement,
            an internship developing an IoT product, have assisted in Telecomms space, and have Freelanced some WordPress and Portfolio websites back in the day.
            I also hold a masters Degree in Information Technology with a major in Business Informatics from James Cook University Brisbane. <br/><br/>
            </p>
      </div>
    )
  }
}

export default AboutMe;
