import type { ConfigFormValues } from "#features/config-form/config-form.types";
import { getThemeList } from "#features/theme/config/theme-list";
import classNames from "classnames";
import { useMemo, type FC, type HTMLAttributes } from "react";

interface WatchPreviewProps extends HTMLAttributes<HTMLDivElement> {
  bw?: boolean;
  config: ConfigFormValues;
}

export const WatchPreview: FC<WatchPreviewProps> = ({
  className,
  bw,
  config,
}) => {
  const themeList = useMemo(() => getThemeList(bw), [getThemeList, bw]);
  const themeClass = useMemo(
    () =>
      (
        themeList.find(({ value }) => value === Number(config.Theme)) ||
        themeList[0]
      ).className,
    [themeList, config.Theme],
  );

  return <div className={classNames(className, themeClass)}></div>;
};

export default WatchPreview;
