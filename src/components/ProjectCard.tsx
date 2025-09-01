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
import Link from "next/link";

interface ProjectCardProps {
  imageUrl: string;
  title: string;

  techStack: string[];
  demoLink?: string;
  clientCode?: string;
}

export default function ProjectCard({
  imageUrl,
  title,
  techStack,
  demoLink,
  clientCode,
}: ProjectCardProps) {
  const projectTitle = title.toLowerCase().replace(/\s+/g, "-");
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
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
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

        <CardFooter className="flex flex-wrap gap-2 px-4 pb-4">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn">Live</Button>
            </a>
          )}
          {clientCode && (
            <a href={clientCode} target="_blank" rel="noopener noreferrer">
              <Button className="btn ">Github</Button>
            </a>
          )}
          <Link href={`/projects/${projectTitle}`}>
            <Button className="btn">Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
