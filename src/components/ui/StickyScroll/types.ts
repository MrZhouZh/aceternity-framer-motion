import type { ReactNode } from "react";

export interface StickyScrollContentItem {
  title: string;
  description: string;
  content?: ReactNode | any;
}


export interface StickyScrollProps {
  content: StickyScrollContentItem[];
  contentClassName?: string;
}
