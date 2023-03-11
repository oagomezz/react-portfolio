import React from 'react';
import { Card, CardTitle, } from "reactstrap";
import Projects from '../../Projects';

const Portfolio = () => {
  

  return (
    <div className="portfolio-overlay" >
    <main className="portfolio-cards">
      {Projects?.map((project,index) => {
        return (
          <Card className="projectcard" key={index}>
            <img alt="project card" src={project.image} className="project-image"/>
            <CardTitle tag="h5" className="project-name">{project.name}</CardTitle>   
          </Card>
        );
      })}

    </main>
    </div>
  );
};

export default Portfolio;