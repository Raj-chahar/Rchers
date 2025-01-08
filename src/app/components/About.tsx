"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Empowering Innovation Through Collaboration

At Community Rchers, we are a vibrant and inclusive community of tech enthusiasts, innovators, and changemakers. Our mission is to empower individuals by providing a platform to learn, collaborate, and innovate in the ever-evolving world of technology.

We organize a variety of events such as:

Hackathons, Ideathons, Job-A-Thons.

Join Us Be part of a dynamic community that’s shaping the future of technology. Whether you’re a student, a professional, or an organization, there’s a place for you at Community Rchers.`;

export function About() {
  return <TextGenerateEffect words={words} />;
}
