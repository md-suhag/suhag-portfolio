import React from "react";

import {
  EyeIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images } from "../../../public/images";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 min-h-[500px]  items-center space-x-5 gap-6 md:gap-0 ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-4 order-2 md:order-1 col-span-2"
      >
        <span className="italic font-serif text-muted-foreground">
          Hi I&apos;m
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold my-2">
          Abdus Salam Suhag
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3  text-primary ">
          Full Stack Web Developer
        </h2>
        <p className="text-muted-foreground md:max-w-[600px]  leading-[22px]">
          Full-Stack Developer specializing in Typescript, React, Redux,
          Next.js, Express.js, Node.js, MongoDB, PostgreSQL, and real-time apps
          with Socket.io.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="#contact" className="btn">
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/file/d/12ObLn9YWqmoNm_XAe2fXqqzEj2TWqq_y/view?usp=sharing"
            target="_blank"
            className="flex gap-2 md:hidden md:opacity-0 md:pointer-events-none btn"
            title="Resume Preview"
          >
            <EyeIcon size={15} className="inline" /> <span>Resume</span>
          </a>
        </div>

        <div className="flex gap-4 mt-3 social-icon">
          <a target="_blank" href="https://www.facebook.com/mdas.suhag">
            <FacebookIcon size={15} />
          </a>

          <a target="_blank" href="https://linkedin.com/in/suhag102">
            {" "}
            <LinkedinIcon size={15} />
          </a>
          <a href="mailto:abdussalamsuhag104@gmail.com">
            <MailIcon size={15} />
          </a>
          <a target="_blank" href="https://github.com/md-suhag">
            <GithubIcon size={15} />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="order-1 md:order-2"
      >
        <Image
          src={images.heroImg}
          alt="suhag"
          width={300}
          height={300}
          priority
          sizes="(max-width: 768px) 200px, 300px"
          className="m-auto w-[200px] h-auto md:w-[300px] "
        />
      </motion.div>
    </section>
  );
};

export default Hero;
