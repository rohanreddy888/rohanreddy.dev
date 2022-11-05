import Image from "next/image";
export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center w-full py-20">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-black text-7xl lg:text-4xl">Reach out to me</h1>
          </div>
          <div className="flex flex-row justify-center  items-center space-x-12 lg:space-x-8 w-full mt-4">
            <div className="flex">
              <a
                href="https://twitter.com/rohanreddy888"
                target="_blank"
                rel="noreferrer">
                <Image
                  className="lg:w-16 lg:h-16"
                  src={"/icons/Twitter.svg"}
                  width="75"
                  height="75"
                  alt="Twitter Icon"
                />
              </a>
            </div>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/rohanreddy888/"
                target="_blank"
                rel="noreferrer">
                <Image
                  className="lg:w-16 lg:h-16"
                  src={"/icons/Linkedin.svg"}
                  width="75"
                  height="75"
                  alt="LinkedIn Icon"
                />
              </a>
            </div>
            <div className="flex">
              <a
                href="https://www.instagram.com/rohanreddi.eth/"
                target="_blank"
                rel="noreferrer">
                <Image
                  className="lg:w-16 lg:h-16"
                  src={"/icons/Instagram.svg"}
                  width="75"
                  height="75"
                  alt="Instagram Icon"
                />
              </a>
            </div>
            <div className="flex">
              <a
                href="https://t.me/rohanreddy8"
                target="_blank"
                rel="noreferrer">
                <Image
                  className="lg:w-16 lg:h-16"
                  src={"/icons/Telegram.svg"}
                  width="75"
                  height="75"
                  alt="Telegram Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex flex-col justify-center items-center space-y-2">
          <div>
            <p className="text-xl lg:text-base font-normal text-black">
              © All Rights Reserved, 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
