import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Yatish Joshi — Software Developer",
    template: "%s · Yatish Joshi",
  },
  description:
    "Portfolio of Yatish Joshi, a software developer in Indore building responsive, high-performance products with React and Next.js.",
  keywords: [
    "Yatish Joshi",
    "Software Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Indore",
    "Learn Linker",
  ],
  authors: [{ name: "Yatish Joshi", url: "https://github.com/yuvi2512" }],
  openGraph: {
    title: "Yatish Joshi — Software Developer",
    description:
      "React and Next.js products by Yatish Joshi, a software developer based in Indore.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatish Joshi — Software Developer",
    description:
      "React and Next.js products by Yatish Joshi, a software developer based in Indore.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <ScrollProgress />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
