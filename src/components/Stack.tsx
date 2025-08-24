
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMysql, SiJavascript, SiVercel, SiMongodb } from "react-icons/si";

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-accent/20 px-3 py-2 bg-background/80 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200">
      {icon}
      <span className="text-sm text-gray-dark dark:text-gray-medium">{label}</span>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-16 sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeader title="Stack" description="Tecnologías con las que trabajo y disfruto construir." />
        <Reveal>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Badge label="Next.js" icon={<SiNextdotjs size={18} />} />
            <Badge label="React" icon={<FaReact size={18} />} />
            <Badge label="TypeScript" icon={<SiTypescript size={18} />} />
            <Badge label="Tailwind" icon={<SiTailwindcss size={18} />} />
            <Badge label="Node.js" icon={<FaNodeJs size={18} />} />
            <Badge label="Express" icon={<SiExpress size={18} />} />
            <Badge label="MongoDB" icon={<SiMongodb size={18} />} />
            <Badge label="MySQL" icon={<SiMysql size={18} />} />
            <Badge label="Python" icon={<FaPython size={18} />} />
            <Badge label="Java" icon={<FaJava size={18} />} />
            <Badge label="JavaScript" icon={<SiJavascript size={18} />} />
            <Badge label="HTML" icon={<FaHtml5 size={18} />} />
            <Badge label="CSS" icon={<FaCss3Alt size={18} />} />
            <Badge label="Vercel" icon={<SiVercel size={18} />} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}