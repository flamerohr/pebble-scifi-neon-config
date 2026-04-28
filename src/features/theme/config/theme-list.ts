import neonTheme from "../color/neon.module.scss";
import bwTheme from "../color/bw.module.scss";

interface ThemeOption {
  value: number;
  label: string;
  bw?: boolean;
  className: string;
  altClassName?: string;
}

export const themeList: ThemeOption[] = [
  {
    value: 0,
    label: "Neon colours",
    className: neonTheme.neon,
  },
  {
    value: 1,
    label: "Black & white",
    className: bwTheme.bw,
    bw: true,
  },
];
