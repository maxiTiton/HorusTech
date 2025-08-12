"use client";

import { useEffect, useState } from "react";

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch {}
}

function getInitialTheme(): "light" | "dark" {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    applyTheme(t);
  }, []);

  function toggle() {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      applyTheme(next);
      return next;
    });
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      onClick={toggle}
      className="p-2 rounded hover:bg-foreground/5"
    >
      {isDark ? (
        // Sun icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      ) : (
        // Moon icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
      )}
    </button>
  );
}