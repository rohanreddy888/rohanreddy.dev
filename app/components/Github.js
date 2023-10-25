"use client";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <div>
      <h2 className="mt-12 text-4xl font-black">GitHub 🛠️</h2>
      <div className="flex flex-col mt-4 space-y-2 text-xl list-disc list-inside md:mt-2">
        <div className="flex flex-wrap items-start justify-start w-full">
          <GitHubCalendar
            username="rohanreddy888"
            colorScheme="dark"
            blockSize={14}
          />
        </div>
      </div>
    </div>
  );
}
