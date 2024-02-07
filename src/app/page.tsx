"use client";
import General from "@/components/general";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-0 pt-0 dark:bg-black">
          <Header/>
      <div className="flex flex-col gap-10 p-10 md:p-24 pt-3 md:pt-10">
          <General/>
          <Experience/>
          <Skills/>
          <Contact/>
      </div>
    </main>
  );
}
