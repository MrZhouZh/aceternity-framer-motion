import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils";
import Card from "./Card";
import CardDescription from "./CardDescription";
import CardTitle from "./CardTitle";
import type { HoverEffectProps } from "./types";

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <span
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoverIndex(idx)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <AnimatePresence>
            {hoverIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </span>
      ))}
    </div>
  );
};

export default HoverEffect;
