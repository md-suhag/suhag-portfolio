import React from "react";
import * as motion from "motion/react-client";

const techStacks = [
  "Javascript",
  "Typescript",
  "React.js",
  "Redux",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSql",
  "Prisma",
  "Shadcn",
  "Socket.io",
];
const Skill = () => {
  return (
    <section id="skills">
      <h2 className="text-center font-extrabold text-4xl my-16">Skills</h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[700px] mx-auto my-5 flex justify-center flex-wrap"
      >
        {techStacks.map((item, i) => (
          <span key={i} className="skill-icon">
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skill;
