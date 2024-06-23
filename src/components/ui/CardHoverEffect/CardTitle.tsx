import { cn } from "@/utils";
import type { CardTitleProps } from "./types";

const CardTitle = ({ className, children }: CardTitleProps) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export default CardTitle;
