import React, { Component } from 'react';


class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-container">
        <h3 className="about-me-title">About Me:</h3>
        <p className="about-me-intro"> Hi, I'am Ajay. <br/> I'm a Full stack Developer based in Sydney, Australia.</p>

            <p className="about-me-desc">

            I love all areas of Programming and my interests are still balanced in front end and back end.<br/>
            Other than coding, i like watching films, tv shows, video gaming, and learning a new thing every day. <br/><br/>
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
