import Hero from "./common/hero/hero";
import About from "./common/about/about";
import Footer from "./common/footer/footer";
import Project from "./common/projects/projects";

export const metadata = {
  title: "Rohan Reddy - Frontend Developer",
  description:
    "Experienced frontend dev and UI/UX designer. Built 50+ websites, skilled in React, Next.js, TailwindCSS and Web3. Active in open-source, always learning.",
  openGraph: {
    title: "Rohan Reddy - Frontend Developer",
    url: "https://www.rohanreddy.dev/",
    description:
      "Experienced frontend dev and UI/UX designer. Built 50+ websites, skilled in React, Next.js, TailwindCSS and Web3. Active in open-source, always learning.",
    images: [
      {
        url: "https://www.rohanreddy.dev/og-image.png",
        secureUrl: "https://www.rohanreddy.dev/og-image.png",
        alt: "Rohan Reddy - Frontend Developer",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.rohanreddy.dev/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Reddy - Frontend Developer",
    description:
      "Experienced frontend dev and UI/UX designer. Built 50+ websites, skilled in React, Next.js, TailwindCSS and Web3. Active in open-source, always learning.",
    creator: "@rohanreddy888",
    images: ["https://www.rohanreddy.dev/og-image.png"],
  },
  robots: {
    index: true,
  },
};

export default function Home() {
  return (
    <>
      <div className="" id="home">
        <Hero />
      </div>
      <div className="pt-12" id="about">
        <About />
      </div>
      <div className="pt-12" id="projects">
        <Project />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
