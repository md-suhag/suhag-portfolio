import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

const frontend = [
  { name: "Javascript", icon: "/icons/javascript.svg" },
  { name: "React.js", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/next.js.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "Shadcn", icon: "/icons/shadcn.jpg" },
  { name: "Material UI", icon: "/icons/material-ui.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind-css.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "Frammer Motion", icon: "/icons/motion.png" },
];
const backend = [
  { name: "Javascript", icon: "/icons/javascript.svg" },
  { name: "Typescript", icon: "/icons/typescript.svg" },
  { name: "Node.js", icon: "/icons/node-js.svg" },
  { name: "Express.js", icon: "/icons/express-js.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "PostgreSql", icon: "/icons/postgresql.png" },
  { name: "Prisma", icon: "/icons/prisma-orm.svg" },
  { name: "Socket.io", icon: "/icons/socket-io.png" },
];
const Skill = () => {
  return (
    <section id="skills">
      <h2 className="text-center font-extrabold text-4xl my-16">Skills</h2>

      <h4 className="text-center font-semibold text-2xl ">Frontend</h4>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[700px] mx-auto my-5 flex justify-center flex-wrap"
      >
        {frontend.map((item, i) => (
          <span key={i} className="skill-icon inline-flex gap-2">
            <Image src={item.icon} alt={item.name} width="20" height="20" />{" "}
            {item.name}
          </span>
        ))}
      </motion.div>
      <h4 className="text-center font-semibold text-2xl ">Backend</h4>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[700px] mx-auto my-5 flex justify-center flex-wrap"
      >
        {backend.map((item, i) => (
          <span key={i} className="skill-icon inline-flex gap-2">
            <Image src={item.icon} alt={item.name} width="20" height="20" />
            {item.name}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skill;
