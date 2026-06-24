import React from "react";

export default function Badge({ text, className = "" }) {
  return (
    <div
      className={`w-fit rounded-full text-inter-16 leading-none backdrop-blur-2xl 
      px-5 py-3 bg-[#FFFFFFE5] ${className}`}
    >
      {text}
    </div>
  );
}
