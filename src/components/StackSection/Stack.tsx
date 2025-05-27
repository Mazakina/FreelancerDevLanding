"use client"

import { lightenColor } from "@/utils/lightenColor";

interface StackProps {
  color: string;
  icon: string;
  title: string;
}


export default function Stack({color,icon,title}: StackProps) {
  // This component is designed to display a stack item with an icon and title.
  return (
    <div
      className={`flex justify-between border-2 rounded-md p-1 items-center w-38 h-14 transition-colors duration-200`}
      style={{ borderColor: color }}
      onMouseEnter={e => {
      e.currentTarget.style.borderColor = lightenColor(color, 30);
      e.currentTarget.style.boxShadow = `0 4px 16px 0 ${(color)}`;
      }}
      onMouseLeave={e => {
      e.currentTarget.style.borderColor = color;
      e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img src={"/slideIcons/" + icon} alt="React" className="w-12 h-12 mx-2 py-1" />
      <h2 className="text-base font-bold m-1 mx-auto text-white">{title}</h2>
    </div>
  )
}