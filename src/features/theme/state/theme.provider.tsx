import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import { ThemeContext } from "#features/theme/state/theme.context";
import { getThemeList } from "../config/theme-list";

import "../size.scss";

export const ThemeProvider: FC<PropsWithChildren<{ bw?: boolean }>> = ({
  bw,
  children,
}) => {
  const [color, setColor] = useState<number>(0);

  const themeList = useMemo(() => getThemeList(bw), [getThemeList, bw]);

  const updateColor = useCallback(
    (newColor: number) => {
      if (!themeList.find(({ value }) => value === newColor)) {
        return;
      }
      setColor(newColor);
    },
    [themeList],
  );

  useEffect(() => {
    const className =
      (themeList.find(({ value }) => value === color) || themeList[0])
        ?.className || "";

    document.documentElement.classList.add(className);

    return () => {
      document.documentElement.classList.remove(className);
    };
  }, [color, themeList]);

  const context = useMemo(
    () => ({ color, setColor: updateColor }),
    [color, updateColor],
  );

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
