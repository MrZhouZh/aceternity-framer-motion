import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import type { StickyScrollProps } from "./types";
import { cn } from "@/utils";

const StickyScroll = ({
  content, contentClassName,
}: StickyScrollProps) => {
  const backgroundColors = [
    `var(--slate-900)`,
    `var(--black)`,
    `var(--neutral-900)`,
  ]
  const linearGradients = [
    `linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))`,
    `linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))`,
    `linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))`,
  ]
  const cardLength = content.length;
  const [activeCard, setActiveCard] = useState(0);
  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, idx) => idx / cardLength);
    const closestBreakpointIdx = cardsBreakpoints.reduce(
      (acc, breakpoint, idx) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return idx;
        }

        return acc;
      },
      0,
    )
    setActiveCard(closestBreakpointIdx);
  })

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundGradient[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, idx) => (
            <div key={item.title + idx} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === idx ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === idx ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
}

export default StickyScroll;
