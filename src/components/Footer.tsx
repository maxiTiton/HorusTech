import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Máximo Titón</p>
        <div className="flex items-center gap-4 text-sm">
          <SocialLinks />
          <Link className="hover:underline" href="#inicio">Arriba</Link>
        </div>
      </div>
    </footer>
  );
}