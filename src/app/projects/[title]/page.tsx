"use client";
import { projectDetails } from "@/lib/projectDetails";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const ProjectDetailsPage = () => {
  const params = useParams();
  const title = params.title;

  const project = projectDetails.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  if (!project) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-muted-foreground text-lg">
        Project not found
      </div>
    );
  }

  return (
    <div className="container mx-auto my-12 px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden shadow-lg bg-transparent">
          {/* Image */}
          {project.imageUrl && (
            <div className="relative h-72 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <CardTitle className="text-2xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </CardTitle>
              </div>
            </div>
          )}

          <CardContent className="p-8">
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              {project.description}
            </p>

            {/* Bullet Points */}
            {project.details && (
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                {project.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
            {/* Tech Stack */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    className="border border-primary/10 bg-primary/5  px-2 py-1  rounded-md text-[10px] "
                    key={i}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live
                </Link>
              </Button>
              <Button asChild>
                <Link
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Github
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage;
