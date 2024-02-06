"use client";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10 pt-0">
      <div className="flex flex-col gap-10">
          <Contact/>
          <Experience/>
          <Skills/>
      </div>
    </main>
  );
}
