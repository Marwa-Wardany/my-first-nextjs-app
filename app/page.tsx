import Hero from "@/Components/Hero";

import "./globals.css";
import { About } from "@/Components/About";
import { Services } from "@/Components/Services";
import { TeamPage } from "@/Components/TeamPage";
import { StartYourProject } from "@/Components/StartYourProject";
export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services />
      <TeamPage />
      <StartYourProject/>
    </main>
     

  );
}