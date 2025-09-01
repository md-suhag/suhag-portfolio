import React from "react";
import ProjectCard from "../ProjectCard";
import { projectDetails } from "./../../lib/projectDetails";

const Project = () => {
  return (
    <section id="project">
      <h2 className="text-center font-extrabold text-4xl my-16">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projectDetails.map((item, i) => (
          <ProjectCard
            key={i}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            techStack={item.techStack}
            demoLink={item.demoLink}
            codeLink={item.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
