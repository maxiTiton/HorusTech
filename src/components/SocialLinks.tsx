import Link from "next/link";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        aria-label="LinkedIn"
        className="hover:text-accent"
        href="https://www.linkedin.com/in/m%C3%A1ximo-tit%C3%B3n/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.18h.05c.54-1.02 1.86-2.18 3.83-2.18 4.1 0 4.86 2.7 4.86 6.2V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V24h-4V8z"/></svg>
      </Link>
      <Link
        aria-label="Instagram"
        className="hover:text-accent"
        href="https://www.instagram.com/maxi_titon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2A2.8 2.8 0 1110.2 12 2.8 2.8 0 0112 9.2zM17.5 6a1 1 0 100 2 1 1 0 000-2z"/></svg>
      </Link>
    </div>
  );
}