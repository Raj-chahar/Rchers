import React from 'react'
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Organize } from "./components/organize";
import { Events } from './components/Events';
import { Footer } from './components/Footer';
import { TextHover } from './components/TextHover';
import { About } from './components/About';

export const metadata = {
  title: "Rchers",
}
export default function ComingSoon() {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <Events/>
      <Organize/>
      <TextHover/>
      <About/>
      <Footer/>
    </div>
  );
}
