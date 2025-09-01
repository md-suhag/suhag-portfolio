import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Project from "@/components/home/Project";
import Skill from "@/components/home/Skill";
import { Particles } from "@/components/magicui/particles";

export default function Home() {
  return (
    <div className=" container px-4 mx-auto ">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        refresh
      />

      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
