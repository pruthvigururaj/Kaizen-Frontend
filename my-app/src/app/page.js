// app/page.js
"use client";

import React, { useEffect, useState } from "react";
import Free from "./Componets/Free";
import Description from "./Componets/Description";
import Claim from "./Componets/Claim";



export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 1024);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {isLargeScreen ? (
        <div className="flex flex-col lg:flex-row w-full gap-2 my-8">
          <div className="flex-1 flex justify-end">
            <div className="flex flex-col items-end w-full">
              <Free />
              <Description />
            </div>
          </div>
          <div className="flex-1">
            <Claim />
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-4 items-center mb-2 mt-8">
          <Description />
          <Free />
          <Claim />
        </div>
      )}
    </div>
  );
}
