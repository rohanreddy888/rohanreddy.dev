import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-start items-center h-screen">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center w-full gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="flex flex-col text-3xl font-bolder">Hola 👋 </h1>
          <h2 className="text-4xl md:text-7xl font-black mt-3">
            I'm Rohan Reddy
          </h2>{" "}
          <h3 className="text-xl md:text-3xl font-extralight mt-1">
            UI/UX Engineer & Web3 Entrepreneur
          </h3>
          <div className="flex flex-row justify-start  items-center space-x-12 w-full mt-4">
            <div className="flex">
              <Link
                href="https://twitter.com/rohanreddy888"
                target="_blank"
                rel="noreferrer">
                <Image
                  className="text-black"
                  src={"/icons/Twitter.svg"}
                  width="40"
                  height="40"
                  alt="Twitter Icon"
                />
              </Link>
            </div>
            <div className="flex">
              <Link
                href="https://www.linkedin.com/in/rohanreddy888/"
                target="_blank"
                rel="noreferrer">
                <Image
                  className="text-black"
                  src={"/icons/Linkedin.svg"}
                  width="40"
                  height="40"
                  alt="LinkedIn Icon"
                />
              </Link>
            </div>
            <div className="flex">
              <Link
                href="https://www.instagram.com/rohanreddi.eth/"
                target="_blank"
                rel="noreferrer">
                <Image
                  className="text-black"
                  src={"/icons/Instagram.svg"}
                  width="40"
                  height="40"
                  alt="Instagram Icon"
                />
              </Link>
            </div>
            <div className="flex">
              <Link
                href="https://t.me/rohanreddy8"
                target="_blank"
                rel="noreferrer">
                <Image
                  className="text-black"
                  src={"/icons/Telegram.svg"}
                  width="40"
                  height="40"
                  alt="Telegram Icon"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:mb-0 mb-8 w-56 h-56 md:w-72 md:h-72">
          <Image
            className="shadow-lg rounded-full p-2 bg-white"
            src={"/picture.png"}
            width="350"
            height="350"
            alt="Rohan Reddy"
            priority
          />
        </div>
      </div>
    </div>
  );
}
