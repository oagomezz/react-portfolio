import React from "react";
import AboutMePhoto from "../assets/AboutMePhoto.jpg"

const AboutMe = () =>{
return(
  <div className="page-content">
    <img alt="Oscar overlooking the Grand Canyon"className="about-me-image" src={AboutMePhoto}></img>
    <div className="text-container">
      <h3> Biography
        <p className="aboutme">
          Welcome, my name is Oscar Gomez, and I am a Full Stack developer currently pursuing my education at Learn Academy. I am enthusiastic about applying my newly acquired skill set to secure a job within the industry that will allow me to utilize my skills to their fullest potential.
        </p>
        <p className="aboutme">
          My passion for coding stems from its ability to create anything imaginable through careful planning and implementation. As an individual who strongly believes in the power of technology for good, I am convinced that software development, under the right circumstances, can have a profound and positive impact on society.
        </p>
      </h3>
    </div>
  </div>

)}

export default AboutMe