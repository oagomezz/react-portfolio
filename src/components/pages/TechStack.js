import React from "react"
import JS from "../assets/Technologies/javascript.png"
import CSS from "../assets/Technologies/css.png"
import HTML from "../assets/Technologies/html.png"
import Rails from "../assets/Technologies/rails.png"
import react from "../assets/Technologies/react.png"
import Ruby from "../assets/Technologies/ruby.png"
import SQL from "../assets/Technologies/sql.png"
import { Card } from "reactstrap"

const TechStack = () =>{
  const tech = [JS,CSS,HTML,Rails,react,Ruby,SQL]
    return(
      <div>
      <main className="tech-stack">
      {tech?.map((tech, index) => {
        return (
            <Card key={index} className='card'>
              <img alt="technology" src={tech} className="tech-image"/>
            </Card>
        )})}
    </main>
      </div>
    )}
    export default TechStack