import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, I am <br />
          <span className="info-name">Abhijeet Malik</span>.
          <br />I am a <strong>full-stack developer</strong> with over 1 years
          of Hands-on experience in building scalable web applications. Skilled
          in both <strong>front-end and back-end development</strong>, I
          specialize in the <strong>MERN stack</strong> and other modern
          technologies to create seamless user experiences and efficient
          solutions.
          <br />
          <strong>Let’s connect and build something awesome!</strong>
        </div>
        <div className="images">
          <img
            src={require("../../../images/coding.png")}
            className="images"
            alt="coding pic"
          />
        </div>
      </div>
      <SocialContact />
      <div className="down">
        <a download href={require("../../../images/Abhijeet_RESUME.pdf")}>
          <i class="fi-rr-download"></i>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;
