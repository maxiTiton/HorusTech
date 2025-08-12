import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-foreground/10 px-3 py-2 bg-background/60">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Stack" description="Tecnologías con las que trabajo y disfruto construir." />
        <Reveal>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Badge label="Next.js" icon={<svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor"><path d="M16 .5C7.44.5.5 7.44.5 16S7.44 31.5 16 31.5 31.5 24.56 31.5 16 24.56.5 16 .5zm6.67 23.3L14.9 13.63v9.55h-1.8V8.97h1.8l7.67 10.07V8.97h1.81v14.83z"/></svg>} />
            <Badge label="React" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><path d="M20.8 12c0 1.1-2.1 2.1-5.3 2.6 1.1 3.1.9 5.3-.2 5.3-1.1 0-2.7-1.9-3.9-5-3.1 1.1-5.3.9-5.3-.2 0-1.1 1.9-2.7 5-3.9-1.1-3.1-.9-5.3.2-5.3 1.1 0 2.7 1.9 3.9 5 3.1-1.1 5.3-.9 5.3.2z"/></svg>} />
            <Badge label="TypeScript" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3z" opacity=".1"/><path d="M3 3h18v18H3z" fill="none" stroke="currentColor" strokeWidth="1"/><path d="M10.3 10.5H8.7V18H7v-7.5H5.5V9H10.3v1.5zm2 .2c.5-.1 1.2-.1 2 .1.8.2 1.4.5 1.8.9.4.4.6.9.6 1.6 0 .8-.3 1.4-.9 1.9-.6.5-1.5.7-2.7.7-.5 0-1-.1-1.3-.2V15c.4.1.9.2 1.4.2.7 0 1.2-.1 1.5-.4.3-.2.5-.5.5-.9s-.1-.6-.4-.8c-.3-.2-.8-.4-1.6-.5-.9-.2-1.6-.5-2-.9-.5-.4-.7-1-.7-1.7 0-.7.3-1.2.9-1.6.6-.4 1.4-.6 2.4-.6.5 0 1 .1 1.4.2v1.6c-.3-.1-.7-.2-1.2-.2-.6 0-1.1.1-1.4.3-.3.2-.4.4-.4.7 0 .3.1.5.4.7.3.2.8.4 1.6.6z"/></svg>} />
            <Badge label="Tailwind" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5c-2.5 0-4 1.3-4.5 3.9.8-1.3 1.8-1.8 3.1-1.6.67.11 1.15.5 1.63.96.83.74 1.78 1.59 3.77 1.59 2.5 0 4-1.3 4.5-3.9-.8 1.3-1.8 1.8-3.1 1.6-.67-.11-1.15-.5-1.63-.96-.83-.74-1.78-1.59-3.77-1.59zM7 12c-2.5 0-4 1.3-4.5 3.9.8-1.3 1.8-1.8 3.1-1.6.67.11 1.15.5 1.63.96.83.74 1.78 1.59 3.77 1.59 2.5 0 4-1.3 4.5-3.9-.8 1.3-1.8 1.8-3.1 1.6-.67-.11-1.15-.5-1.63-.96-.83-.74-1.78-1.59-3.77-1.59z"/></svg>} />
            <Badge label="Node.js" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.2L4.5 9v6L12 19.8 19.5 15V9L12 4.2z"/></svg>} />
            <Badge label="PostgreSQL" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.5 0 10 2.9 10 6.5S17.5 15 12 15 2 12.1 2 8.5 6.5 2 12 2zm-3 16c0 1.1 1.8 2 3 2s3-.9 3-2v-1c-1 .6-2 .8-3 .8s-2-.2-3-.8v1z"/></svg>} />
            <Badge label="Prisma" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3 2.2l8.7 14.8c.5.9-.1 2-1.1 2.1L6.6 20.8c-1 .1-1.8-.8-1.6-1.8L8.9 3.1c.2-1 1.4-1.3 2.4-.9z"/></svg>} />
            <Badge label="Vercel" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l10 18H2L12 2z"/></svg>} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}