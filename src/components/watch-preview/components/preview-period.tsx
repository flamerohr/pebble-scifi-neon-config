import { useMemo, type FC, type SVGAttributes } from "react";
import { Dot5x5Segment } from "./segments/dot-5x5-segment";

interface PreviewPeriodProps extends SVGAttributes<SVGElement> {
  borderPadding: { w: number; h: number };
  heightOffset: number;
  matrixSize?: number;
  width: number;
}

const gap = 3;

export const PreviewPeriod: FC<PreviewPeriodProps> = ({
  borderPadding,
  heightOffset,
  width,
  matrixSize = 4,
  ...props
}) => {
  const [segmentSize, widthOffset] = useMemo(() => {
    const size = matrixSize * 5 + 4;

    const offset = Math.round(width - borderPadding.w - (size * 2 + gap * 1));

    return [size, offset];
  }, [matrixSize, width]);

  return (
    <g {...props} transform={`translate(${widthOffset} ${heightOffset})`}>
      <Dot5x5Segment
        letter="P"
        activeClassName="period-active"
        matrixSize={matrixSize}
      />
      <Dot5x5Segment
        letter="M"
        activeClassName="period-active"
        transform={`translate(${segmentSize + gap} 0)`}
        matrixSize={matrixSize}
      />
    </g>
  );
};

export default PreviewPeriod;
