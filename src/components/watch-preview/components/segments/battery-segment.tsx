import type { FC, SVGAttributes } from "react";

interface BatterySegmentProps extends SVGAttributes<SVGElement> {
  activeClassName: string;
  borderClassName: string;
  percent: number;
  matrixSize?: number;
  columns?: number;
}

export const BatterySegment: FC<BatterySegmentProps> = ({
  activeClassName,
  borderClassName,
  percent,
  matrixSize = 4,
  columns = 10,
  ...props
}) => {
  return (
    <g {...props}>
      {[...Array(5)].map((_, i) =>
        [...Array(columns)].map((_, j) => {
          let className = "";
          if (
            ((i === 0 || i === 4) && j < columns - 1) ||
            j === 0 ||
            j === columns - 2 ||
            (i > 0 && i < 4 && j === columns - 1)
          ) {
            className = borderClassName;
          }
          if (
            i > 0 &&
            i < 4 &&
            j > 0 &&
            j < columns - 2 &&
            (j - 1) / columns - 3 < percent / 100
          ) {
            className = activeClassName;
          }
          return (
            <rect
              x={j * (matrixSize + 1)}
              y={i * (matrixSize + 1)}
              width={matrixSize}
              height={matrixSize}
              className={className}
            />
          );
        }),
      )}
    </g>
  );
};
