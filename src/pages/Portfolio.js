import React from 'react';
import DisplayProjects from '../components/DisplayProjects';
import '../dist/output.css'

function Portfolio() {
  return (
    <div>
        <h1>Projects</h1>

        <section>
        <DisplayProjects />
        </section>
    </div>
  );
}

export default Portfolio;