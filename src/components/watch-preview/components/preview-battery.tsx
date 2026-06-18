import { useMemo, type FC, type SVGAttributes } from "react";
import { BatterySegment } from "./segments/battery-segment";

interface PreviewBatteryProps extends SVGAttributes<SVGElement> {
  heightOffset: number;
  matrixSize?: number;
  width: number;
}

const columns = 15;

export const PreviewBattery: FC<PreviewBatteryProps> = ({
  heightOffset,
  matrixSize = 4,
  width,
  ...props
}) => {
  const [widthOffset] = useMemo(() => {
    const offset = Math.round((width - matrixSize * columns) / 2);

    return [offset];
  }, [matrixSize, width]);

  return (
    <g {...props} transform={`translate(${widthOffset} ${heightOffset})`}>
      <BatterySegment
        percent={70}
        borderClassName="battery-border"
        activeClassName="battery-active"
        matrixSize={matrixSize}
        columns={columns}
      />
    </g>
  );
};

export default PreviewBattery;
