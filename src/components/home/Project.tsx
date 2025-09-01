import React from "react";
import ProjectCard from "../ProjectCard";
import { homeProjectDetails } from "./../../lib/homeProjectDetails";
import Link from "next/link";

const Project = () => {
  return (
    <section id="project">
      <h2 className="text-center font-extrabold text-4xl my-16">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {homeProjectDetails.map((item, i) => (
          <ProjectCard
            key={i}
            imageUrl={item.imageUrl}
            title={item.title}
            techStack={item.techStack}
            demoLink={item.demoLink}
            clientCode={item.clientCode}
          />
        ))}
      </div>
      <div className="text-center my-4">
        <Link href="/projects" className="btn">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Project;
