"use client";

import React from 'react'
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Organize } from "./components/organize";
import { Dock } from "./components/dock";
import { Events } from './components/Events';

export default function ComingSoon() {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <Organize/>
      <Events/>
      <Dock/>
    </div>
  );
}
