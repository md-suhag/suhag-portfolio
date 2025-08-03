import React from "react";
import { Button } from "../ui/button";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]  items-center space-x-5 gap-6 md:gap-0 ">
      <div className="py-4 order-2 md:order-1">
        <span className="italic font-serif text-muted-foreground">
          {" "}
          Hi I&apos;m
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold my-3">
          Abdus Salam Suhag
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-4  text-primary">
          Full Stack Web Developer
        </h2>
        <p className="text-muted-foreground">
          Professional web developer and designer working with high level
          experienced.
        </p>
        <Button className="mt-6">Contact Me</Button>
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
      </div>
      <div className="order-1 md:order-2">
        <Image
          className="m-auto   w-50 md:w-[300px]"
          src="/suhag.png"
          alt="suhag"
          width={"300"}
          height={"300"}
        />
      </div>
    </section>
  );
};

export default Hero;
