'use client'
import { useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import List from "./List";

interface ParallaxProps {
  baseVelocity: number;
}
export default function ParallaxText({ baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(1, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current  * baseVelocity * (delta / 1000);

    moveBy +=  velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="sticky z-20 parallax w-full">
      <motion.div  className="scroller  flex-nowrap flex text-9xl w-fit" style={{ x }}>
        <List />
        <List/>
        <List/>
        <List/>
      </motion.div>
    </div>
  );
}
