import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export function TextHover() {
  return (
    <div>
        <h1 className="font-sans text-8xl flex align-center justify-center mt-10" id="About">Who are</h1>
        <div className="h-[50rem] flex items-center justify-center -mt-40">
          <TextHoverEffect text="RCHERS" />
          </div>
    </div>
  );
}
