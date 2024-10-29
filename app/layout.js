import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body className="background">
        <Navbar />
        <div className="px-6 md:px-20">{children}</div>
      </body>
    </html>
  );
}
