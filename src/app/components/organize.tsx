"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Organize() {
  return (
    <div className="m-4 w-full bg-black">
    <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight relative z-10">What do we organise</h1>
    <div className="m-8 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Tech Talks
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Informal gatherings for tech enthusiasts to exchange ideas.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Founder Talks
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Sessions with startup founders sharing their journeys.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Manthan Hackathon
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Craft . Ideate . Achieve
            <br/> Encourages Participants to Think & Craft new Ideas using Tech.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Startup Ideathons
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Help participants brainstorm and pitch startup ideas.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Sustainable Solutions Ideathon
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Focus on sustainable development goals (SDGs).
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Tech Recruitment Fairs
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Connect participants with recruiters from tech companies.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Designathons
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          UI/UX design contests for creative problem-solving.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Community Summit
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          A multi-day event with talks, workshops, and competitions.
          </p>
        </div>
      </WobbleCard>
    </div>
    </div>
  );
}
