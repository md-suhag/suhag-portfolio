import React from "react";

import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";
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
          {" "}
          Hi I&apos;m
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold my-3">
          Abdus Salam Suhag
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-4  text-primary ">
          Full Stack Web Developer
        </h2>
        <p className="text-muted-foreground md:max-w-[600px]">
          Professional web developer and designer who provides best quantity
          service.
        </p>
        <Link href="#contact" className="mt-6  btn">
          Contact Me
        </Link>
        <div className="flex gap-4 mt-3 social-icon">
          <a target="_blank" href="https://www.facebook.com/mdas.suhag">
            <FacebookIcon size={15} />
          </a>

          <a target="_blank" href="https://linkedin.com/in/suhag102">
            {" "}
            <LinkedinIcon size={15} />
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
          className="m-auto max-w-full  w-50 md:w-[300px]"
          src={images.heroImg}
          priority
          alt="suhag"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
