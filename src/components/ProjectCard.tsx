"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  codeLink?: string;
}

export default function ProjectCard({
  imageUrl,
  title,
  description,
  techStack,
  demoLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=""
    >
      <Card className="w-full   h-full flex flex-col  justify-between shadow-lg rounded-2xl overflow-hidden bg-transparent">
        <CardHeader>
          <div className="relative w-full h-48">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </CardHeader>

        <CardContent className="px-4 flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
          <div className="flex flex-wrap">
            {techStack.map((item, i) => (
              <span
                className="border border-primary/10 bg-primary/5  px-2 py-1 m-1 rounded-md text-[10px] "
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between px-4 pb-4">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn">Live</Button>
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn ">Github</Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
