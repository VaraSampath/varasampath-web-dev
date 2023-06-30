import { Experience, Hero, Projects, Contact } from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
