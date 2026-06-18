import { useMemo, type FC, type SVGAttributes } from "react";
import { Dot5x5Segment } from "./segments/dot-5x5-segment";

interface PreviewDayProps extends SVGAttributes<SVGElement> {
  borderPadding: { w: number; h: number };
  heightOffset: number;
  matrixSize?: number;
  width: number;
}

const gap = 3;

export const PreviewDay: FC<PreviewDayProps> = ({
  borderPadding,
  heightOffset,
  matrixSize = 4,
  width,
  ...props
}) => {
  const [segmentSize, widthOffset] = useMemo(() => {
    const size = matrixSize * 5 + 4;

    const offset = Math.round((width - (size * 3 + gap * 2)) / 2);

    return [size, offset];
  }, [matrixSize, width]);

  return (
    <g {...props} transform={`translate(${widthOffset} ${heightOffset})`}>
      <Dot5x5Segment
        letter="M"
        activeClassName="day-active"
        matrixSize={matrixSize}
      />
      <Dot5x5Segment
        letter="O"
        activeClassName="day-active"
        transform={`translate(${segmentSize + gap} 0)`}
        matrixSize={matrixSize}
      />
      <Dot5x5Segment
        letter="N"
        activeClassName="day-active"
        transform={`translate(${(segmentSize + gap) * 2} 0)`}
        matrixSize={matrixSize}
      />
    </g>
  );
};

export default PreviewDay;
