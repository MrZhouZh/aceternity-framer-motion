import type { ReactNode } from "react";

export interface HoverItem {
  title: string;
  description: string;
  link: string;
}

export interface HoverEffectProps {
  items: HoverItem[];
  className?: string;
}

export interface CardProps {
  className?: string;
  children: ReactNode;
}

export interface CardTitleProps {
  className?: string;
  children: ReactNode;
}

export interface CardDescriptionProps {
  className?: string;
  children: ReactNode;
}
