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
              className="text-muted-foreground text-base"
            >
              <p>
                {" "}
                I&apos;m a passionate MERN Stack Developer with a strong focus
                on building scalable, high-performance web applications. I
                specialize in creating clean, responsive user interfaces with
                React, and robust, secure backends with Node.js, Express, and
                MongoDB. My development approach combines best practices, modern
                tools, and attention to detail—whether I&apos;m working on
                authentication systems, REST APIs, or full-stack applications.{" "}
              </p>
              <p className="mt-2">
                {" "}
                I enjoy solving complex problems, optimizing user experience,
                and continuously learning new technologies to stay ahead in the
                fast-paced web world.
              </p>
            </TabsContent>
            <TabsContent value="education">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                <div className="my-5  text-sm sm:text-base">
                  <h4 className="text-lg mb-2">
                    Secondary School Cirtificate (SSC)
                  </h4>
                  <p className="text-muted-foreground">
                    Shaistaganj High School
                  </p>
                  <p className="text-muted-foreground">
                    Science - <span>( 2018-2019 )</span>
                  </p>

                  <p className="text-muted-foreground">
                    Gpa : 4.78 out of 5.00
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
