"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

export default function Reveal({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className="opacity-0 translate-y-4 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 transition-all duration-700 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}