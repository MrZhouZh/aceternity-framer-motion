import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/utils";
import type { ParallaxScrollProps } from "./types"

const GRID_COL = 3;

const ParallaxScroll = ({ className, images }: ParallaxScrollProps) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / GRID_COL);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              key={`grid-1${idx}`}
              style={{ y: translateFirst }}
            >
              <img
                alt="thumbnail"
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={400}
                width={400}
                src={el}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              key={`grid-2${idx}`}
              style={{ y: translateSecond }}
            >
              <img
                alt="thumbnail"
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={400}
                width={400}
                src={el}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              key={`grid-3${idx}`}
              style={{ y: translateThird }}
            >
              <img
                alt="thumbnail"
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={400}
                width={400}
                src={el}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParallaxScroll
