import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import React from "react";
import { images } from "../../../public/images";
import * as motion from "motion/react-client";

const About = () => {
  return (
    <section id="about" className="">
      <h2 className="text-center font-extrabold text-4xl my-16">About</h2>

      <div className="grid grid-cols-1 md:grid-cols-3   gap-10 md:gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto"
        >
          <Image
            className="w-50 md:w-[300px]"
            src={images.developer}
            alt="developer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-2"
        >
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger
                className="px-4 py-2 mr-3 mb-3 data-[state=active]:border-primary/70 data-[state=active]:border-l-1 rounded-md  hover:cursor-pointer  data-[state=active]:bg-primary/30"
                value="overview"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                className="px-4 py-2  data-[state=active]:border-primary/70 data-[state=active]:border-l-1 rounded-md hover:cursor-pointer data-[state=active]:bg-primary/30"
                value="education"
              >
                Education
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="overview"
              className="text-muted-foreground text-base p-2"
            >
              <p>
                I&apos;m a Full Stack Developer passionate about building{" "}
                <strong>scalable, real-world web applications</strong>. My core
                stack includes{" "}
                <strong>
                  React.js, Next.js, Node.js, Express.js, and MongoDB
                </strong>
                , with experience in <strong>PostgreSQL and Socket.io</strong>{" "}
                for real-time features. I have hands-on experience delivering
                full-stack solutions focused on{" "}
                <strong>
                  clean architecture, high performance, and practical
                  problem-solving
                </strong>
                .
              </p>
              <p className="mt-2">
                In addition to development, I&apos;ve worked as a{" "}
                <strong>Web Development Mentor</strong>, mentoring students in{" "}
                <strong>JavaScript, HTML, CSS, Bootstrap, Git, GitHub</strong>,
                and backend development using <strong>MySQL and PHP</strong>. I
                guide them in understanding complex concepts and applying them
                effectively in real-world projects.
              </p>
              <p className="mt-2">
                I focus on{" "}
                <strong>
                  problem-solving, scalability, and developer-friendly
                  architecture
                </strong>
                . Whether it&apos;s designing authentication systems, optimizing
                APIs, or integrating real-time communication, I combine{" "}
                <strong>technical precision with creative thinking</strong> and
                continuously explore new technologies to stay ahead in the
                evolving web ecosystem.
              </p>
              Name
            </TabsContent>
            <TabsContent value="education">
              <div className="p-2">
                <p className="text-muted-foreground">
                  Completed coursework in computer technology, covering
                  programming, software development, database management,
                  networking, and system design. Developed strong
                  problem-solving and technical skills through both theoretical
                  and practical projects, preparing for real-world applications
                  in modern computing and engineering fields.
                </p>
                <div className="my-5 text-sm sm:text-base">
                  <h4 className="text-lg mb-2">Diploma in Engineering</h4>
                  <p className="text-muted-foreground">
                    Habiganj Polytechnic Institute
                  </p>
                  <p className="text-muted-foreground">
                    Computer Technology - <span>( 2020-2024 )</span>
                  </p>

                  <p className="text-muted-foreground">
                    Cgpa : 3.90 out of 4.00
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
