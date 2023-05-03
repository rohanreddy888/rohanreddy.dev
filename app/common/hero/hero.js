import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex items-center justify-start min-h-[80vh]">
      <div className="flex flex-col-reverse items-start justify-between w-full gap-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <h2 className="flex flex-col text-3xl font-bolder">Hola 👋 </h2>
          <h3 className="mt-3 text-4xl font-black md:text-7xl">
            I'm Rohan Reddy
          </h3>{" "}
          <h1 className="mt-1 text-xl md:text-3xl font-extralight">
            UI/UX Engineer & Web3 Entrepreneur
          </h1>
          <div className="flex flex-row items-center justify-start w-full mt-4 space-x-12">
            <div className="flex">
              <Link
                href="https://twitter.com/rohanreddy888"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="text-black"
                  src={"/icons/Twitter.svg"}
                  width="40"
                  height="40"
                  alt="Twitter Icon"
                  priority
                />
              </Link>
            </div>
            <div className="flex">
              <Link
                href="https://www.linkedin.com/in/rohanreddy888/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="text-black"
                  src={"/icons/Linkedin.svg"}
                  width="40"
                  height="40"
                  alt="LinkedIn Icon"
                  priority
                />
              </Link>
            </div>
            <div className="flex">
              <Link
                href="https://www.instagram.com/rohanreddi.eth/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="text-black"
                  src={"/icons/Instagram.svg"}
                  width="40"
                  height="40"
                  alt="Instagram Icon"
                  priority
                />
              </Link>
            </div>
            <div className="flex">
              <Link
                href="https://t.me/rohanreddy8"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="text-black"
                  src={"/icons/Telegram.svg"}
                  width="40"
                  height="40"
                  alt="Telegram Icon"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-56 h-56 mb-8 md:mb-0 md:w-72 md:h-72">
          <Image
            className="p-2 bg-white rounded-full shadow-lg"
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
