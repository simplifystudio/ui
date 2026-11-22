import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer flex items-center justify-center gap-4 py-16 text-xs text-black dark:text-white">
      <span>
        © {new Date().getFullYear()}{" "}
        <a
          href="https://simplifystudio.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black transition-opacity hover:opacity-50 dark:text-white dark:hover:opacity-50"
        >
          Simplify Studio
        </a>
      </span>
      <Link href="/license" className="text-black transition-opacity hover:opacity-50 dark:text-white dark:hover:opacity-50">
        License
      </Link>
      <Link href="/privacy" className="text-black transition-opacity hover:opacity-50 dark:text-white dark:hover:opacity-50">
        Privacy
      </Link>
    </footer>
  );
}
