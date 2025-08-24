
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        aria-label="LinkedIn"
        className="text-gray-dark dark:text-gray-medium hover:text-accent transition-colors duration-200"
        href="https://www.linkedin.com/in/m%C3%A1ximo-tit%C3%B3n/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={22} />
      </Link>
      <Link
        aria-label="Instagram"
        className="text-gray-dark dark:text-gray-medium hover:text-accent transition-colors duration-200"
        href="https://www.instagram.com/maxi_titon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={22} />
      </Link>
    </div>
  );
}