import neonTheme from "../color/neon.module.scss";
import bwTheme from "../color/bw.module.scss";

interface ThemeOption {
  value: number;
  label: string;
  className: string;
}

export const getThemeList = (bw = false): ThemeOption[] =>
  !bw
    ? [
        {
          value: 0,
          label: "Neon colours",
          className: neonTheme.neon,
        },
        {
          value: 1,
          label: "Black & white",
          className: bwTheme.bw,
        },
      ]
    : [
        {
          value: 1,
          label: "Black & white",
          className: bwTheme.bw,
        },
      ];
