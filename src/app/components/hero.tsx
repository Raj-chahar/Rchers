"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function Hero() {
  return (
    <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Background Beams with Sparkles */}
      <BackgroundBeamsWithCollision>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Text with Gradient Effect */}
          <h1 className="text-2xl md:text-4xl lg:text-9xl font-bold text-center text-white font-sans tracking-tight relative z-10">
            {""}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 font-serif">
                <span>Rchers</span>
              </div>
            </div>
          </h1>
          <div className="w-[40rem] relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
            <h3 className="py-5 text-l md:text-xl lg:text-2xl font-bold text-center text-white font-serif tracking-widest relative z-10">सृजन | विचार | सिद्धि</h3>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
