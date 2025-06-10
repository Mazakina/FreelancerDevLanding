"use client";

import { alexana } from "@/app/ui/fonts";
import { useTitleAnimation } from "@/utils/textAnimation";
import { useEffect, useState } from "react";

export function Title() {
  const [text, setText] = useState("MAZAKINA");
  const { handleReplace } = useTitleAnimation({
    text,
    setText,
    length: 20,
    interval: 100,
  });
  useEffect(() => {
    handleReplace();
  }, []);
  return (
    <h1
      onClick={handleReplace}
      className={`
      ${alexana.className}
      ss:text-[40px]
      text-white
      
      overflow-hidden
      text-[92px]
      tracking-[4.6px]
      whitespace-nowrap
      `}
    >
      {text}
    </h1>
  );
}
