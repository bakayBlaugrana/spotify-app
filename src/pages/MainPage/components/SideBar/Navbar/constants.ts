import HomeIcon from "assets/images/HomeIcon";
import { ReactNode } from "react";
import { ISvgProps } from "types/types";

export const links: {
  text: string;
  icon: (width?: string, height?: string, fill?: string) => ReactNode;
}[] = [
  {
    text: 'Home',
    icon: (width, height, fill) => HomeIcon({ width, height, fill }),
  },
  {
    text: 'Songs',
    icon: (width, height, fill) => HomeIcon({ width, height, fill }),
  },
  {
    text: 'Artists',
    icon: (width, height, fill) => HomeIcon({ width, height, fill }),
  },
  {
    text: 'Albums',
    icon: (width, height, fill) => HomeIcon({ width, height, fill }),
  },
  {
    text: 'Podcast',
    icon: (width, height, fill) => HomeIcon({ width, height, fill }),
  },
]