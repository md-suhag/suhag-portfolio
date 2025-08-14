import React from "react";
import ProjectCard from "../ProjectCard";

const projectDetails = [
  {
    imageUrl: "/tech-space.jpg",
    title: "Tech Space",
    description: "",
    techStack: ["React.js", "Redux", "Express.js", "MongoDB", "Shadcn"],
    demoLink: "https://tech-space-client.vercel.app/",
    codeLink: "https://github.com/md-suhag/tech-space.git",
  },
  {
    imageUrl: "/talent-it.jpg",
    title: "Talent It Conrner",
    description: "",
    techStack: ["React.js", "Express.js", "Mongoose", "Tailwind"],
    demoLink: "https://talentitcorner.vercel.app/",
    codeLink: "",
  },
  {
    imageUrl: "/mychat.jpg",
    title: "My chat",
    description: "",
    techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "Tailwind"],
    demoLink: "https://my-chat-mern.vercel.app/",
    codeLink: "https://github.com/md-suhag/my-chat-client",
  },
  {
    imageUrl: "/story-planet.jpg",
    title: "Story Planet",
    description: "",
    techStack: ["React.js", "Express.js", "MongoDB", "Tailwind"],
    demoLink: "https://story-planet.vercel.app/",
    codeLink: "https://github.com/md-suhag/story-planet",
  },
];

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
