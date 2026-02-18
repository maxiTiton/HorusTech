"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/loginangus.png",
    alt: "Login Angus",
    label: "Login",
  },
  {
    src: "/paneladminangus.png",
    alt: "Panel admin Angus",
    label: "Panel admin",
  },
  {
    src: "/angus.png",
    alt: "Angus Bar",
    label: "Inicio",
  },
];

export default function AngusCarousel() {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const current = useMemo(() => images[index], [index]);

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className="mt-6">
      <div className="relative w-full bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
        <Image
          src={current.src}
          alt={current.alt}
          width={1600}
          height={900}
          className="w-full h-auto object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
        <div className="absolute inset-0 flex items-center justify-between px-3">
          <button
            type="button"
            onClick={goPrev}
            className="h-9 w-9 rounded-full bg-white/80 dark:bg-black/60 text-foreground shadow hover:bg-white dark:hover:bg-black transition"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="h-9 w-9 rounded-full bg-white/80 dark:bg-black/60 text-foreground shadow hover:bg-white dark:hover:bg-black transition"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-accent" : "bg-white/70 dark:bg-black/50"
              }`}
              aria-label={`Ir a ${img.label}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm text-foreground/70">
        <span>{current.label}</span>
        <span>
          {index + 1}/{total}
        </span>
      </div>
    </div>
  );
}
