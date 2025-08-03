import Hero from "@/components/home/Hero";
import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className=" container px-4 mx-auto ">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        refresh
      />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}
