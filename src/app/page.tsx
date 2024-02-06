"use client";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          <Experience/>
          <Skills/>
      </div>
    </main>
  );
}
