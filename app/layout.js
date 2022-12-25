import "./globals.css";
import { Inter } from "@next/font/google";
import Navbar from "./nav-bar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Rohan Reddy</title>
      </head>
      <body className="background">
        <Navbar />
        <div className="px-4 md:px-12">{children}</div>
      </body>
    </html>
  );
}
