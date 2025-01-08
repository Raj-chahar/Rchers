"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#Home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Events",
      link: "#Events",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeRr_t4IidDAiJ7Je_UFA_hy45cm8bD-iWvmNKcDD4jLJS1lg/viewform?usp=sharing",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      external: true,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
