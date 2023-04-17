import { ReactNode } from "react";

export interface IMenuItem {
  name: string;
  handleClick: () => void;
  icon?: ReactNode;
}
