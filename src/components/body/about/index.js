import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋, I am <br />
                    <span className="info-name">Abhijeet Malik</span>.
                    <br />
                    I’m a passionate <strong>Full Stack Web Developer</strong> with a focus on <strong>Frontend</strong>.
                    <br />
                    I love exploring tech, building responsive apps, and learning new things.
                    <br />
                    Currently open to <strong>Software Engineer roles</strong> or freelance work.
                    <br />
                    Let’s connect and build something awesome!
                </div>
                <div className="images">
                    <img src={require('../../../images/coding.png')} className="images" alt="coding pic" />
                </div>
            </div>

            <SocialContact />
        </div>
    );
}

export default About;