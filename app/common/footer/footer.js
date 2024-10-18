export default function Footer() {
  return (
    <>
      <div className="pt-10 pb-5">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-base font-normal text-center text-black">
            All Rights Reserved © {new Date().getFullYear()} Rohan Reddy
          </p>
        </div>
      </div>
    </>
  );
}
