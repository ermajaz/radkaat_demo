import { ReactNode } from "react";

export interface SupportSection {
  id: string;
  title: string;
  content: ReactNode;
}

export interface SupportData {
  [route: string]: SupportSection[];
}
