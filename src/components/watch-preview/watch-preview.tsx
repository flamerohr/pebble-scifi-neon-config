import type { ConfigFormValues } from "#features/config-form/config-form.types";
import { getThemeList } from "#features/theme/config/theme-list";
import classNames from "classnames";
import { useMemo, type FC, type HTMLAttributes } from "react";
import PreviewTime from "./components/preview-time";
import PreviewDay from "./components/preview-day";
import PreviewDate from "./components/preview-date";

import s from "./watch-preview.module.scss";
import PreviewBluetooth from "./components/preview-bluetooth";
import PreviewPeriod from "./components/preview-period";
import PreviewBattery from "./components/preview-battery";
import { PreviewBorder } from "./components/preview-border";

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

  const matrixSize: number = 3;

  const [width, height] = useMemo(() => {
    // Emery
    return [200, 228];
  }, []);

  const borderPadding = useMemo(() => {
    // Neon
    if (config.BorderType === "1") {
      return { w: 14, h: 14 };
    }

    return { w: 5, h: 5 };
  }, [config.BorderType]);

  const [
    timeScale,
    timeOffset,
    dayOffset,
    dateOffset,
    bluetoothOffset,
    batteryOffset,
  ] = useMemo(() => {
    const scale =
      Math.round(((width - borderPadding.w * 2) / 4.3 / 5) * 100) / 100;

    const timeY = (height - 9 * scale) / 2;

    const matrixH = matrixSize * 5 + 4;

    const dayY = borderPadding.h;

    const dateY =
      ((height - 9 * scale) / 2 + (borderPadding.h + matrixH) / 2) / 2;

    const bluetoothY = Math.round(
      ((height * 3 + 9 * scale) / 2 - borderPadding.h) / 2 - matrixH,
    );

    const batteryY = Math.round(height - matrixH - borderPadding.h);

    return [scale, timeY, dayY, dateY, bluetoothY, batteryY];
  }, [width, height, borderPadding, matrixSize]);

  return (
    <div className={classNames(className, themeClass, s.preview, s.emery)}>
      <svg
        className={classNames(s.image)}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        filter="saturate(40%) brightness(90%)"
      >
        <PreviewBorder type={config.BorderType} width={width} height={height} />
        <PreviewDay
          borderPadding={borderPadding}
          heightOffset={dayOffset}
          width={width}
          matrixSize={matrixSize}
        />
        <PreviewDate
          borderPadding={borderPadding}
          heightOffset={dateOffset}
          width={width}
          matrixSize={matrixSize}
        />
        <PreviewBluetooth
          borderPadding={borderPadding}
          heightOffset={bluetoothOffset}
          width={width}
          matrixSize={matrixSize}
        />
        <PreviewPeriod
          borderPadding={borderPadding}
          heightOffset={bluetoothOffset}
          width={width}
          matrixSize={matrixSize}
        />
        <PreviewBattery
          heightOffset={batteryOffset}
          width={width}
          matrixSize={matrixSize}
        />
        <PreviewTime
          borderPadding={borderPadding}
          scale={timeScale}
          heightOffset={timeOffset}
        />
      </svg>
    </div>
  );
};

export default WatchPreview;
