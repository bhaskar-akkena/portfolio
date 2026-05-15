import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack AI Engineer & Researcher",
  description:
    "Technical portfolio — from CS fundamentals to data science and AI research, featuring work on bias in AI-generated travel narratives.",
  keywords: [
    "AI Research",
    "Data Science",
    "Full-Stack",
    "Systems",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body suppressHydrationWarning={true} className="min-h-full bg-midnight font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
