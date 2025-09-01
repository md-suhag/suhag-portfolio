import ProjectCard from "@/components/ProjectCard";
import { projectDetails } from "@/lib/projectDetails";
import React from "react";

const Blogs = () => {
  return (
    <div className="mx-auto container px-4">
      <h2 className="text-center font-extrabold text-4xl my-16">
        All Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projectDetails.map((item, i) => (
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
    </div>
  );
};

export default Blogs;
