"use client";
import General from "@/components/general";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10 pt-0">
      <div className="flex flex-col gap-10">
          <General/>
          <Experience/>
          <Skills/>
          <Contact/>
      </div>
    </main>
  );
}
