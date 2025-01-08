import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

export function Events() {
  const data = [
    {
      title: "January 2025",
      content: (
        <div>
          <h1 className="text-5xl">Manthan: Adhyaya Pratham</h1>
          <br/>
          <p className="text-white dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
          A 36 Hours Hackathon (3-days) where, Participants solve real-world challenges in areas like FinTech, HealthTech, or Smart Cities.
          <br/>
          Winning teams receive prizes(worth; 500k) and opportunities to showcase projects to industry partners.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Rchers_white.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/Manthan.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "February 2025",
      content: (
        <div>
          <h1 className="text-5xl">Founder Talk</h1>
          <br/>
          <p className="text-white dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
          Highlight the entrepreneurial journey of a tech founder, including challenges, milestones, and key learnings.
          <br/>
          Discuss innovative approaches, leadership in tech, and advice for aspiring entrepreneurs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/FLAME-University-Founders-Talk-Series.jpg"
              alt="Founder Talk"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foundertalk2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "March 2025",
      content: (
        <div>
          <h1 className="text-5xl">Tech Talk</h1>
          <br/>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          An informal meetup with tech talks, panel discussions, and networking opportunities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/TechTalk.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="Events">
      <Timeline data={data} />
    </div>
  );
}
