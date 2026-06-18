import { useMemo, type FC, type SVGAttributes } from "react";
import { Dot5x5Segment } from "./segments/dot-5x5-segment";

interface PreviewDateProps extends SVGAttributes<SVGElement> {
  borderPadding: { w: number; h: number };
  heightOffset: number;
  matrixSize?: number;
  width: number;
}

const gap = 3;

export const PreviewDate: FC<PreviewDateProps> = ({
  borderPadding,
  heightOffset,
  width,
  matrixSize = 4,
  ...props
}) => {
  const [segmentSize, widthOffset] = useMemo(() => {
    const size = matrixSize * 5 + 4;

    const offset = Math.round((width - (size * 6 + gap * 5)) / 2);

    return [size, offset];
  }, [matrixSize, width]);

  return (
    <g {...props} transform={`translate(${widthOffset} ${heightOffset})`}>
      <Dot5x5Segment
        letter="1"
        activeClassName="date-active"
        matrixSize={matrixSize}
      />
      <Dot5x5Segment
        letter="4"
        activeClassName="date-active"
        transform={`translate(${segmentSize + gap} 0)`}
        matrixSize={matrixSize}
      />
      <Dot5x5Segment
        letter="J"
        activeClassName="date-active"
        transform={`translate(${(segmentSize + gap) * 3} 0)`}
        matrixSize={matrixSize}
      />
      <Dot5x5Segment
        letter="U"
        activeClassName="date-active"
        transform={`translate(${(segmentSize + gap) * 4} 0)`}
        matrixSize={matrixSize}
      />
      <Dot5x5Segment
        letter="N"
        activeClassName="date-active"
        transform={`translate(${(segmentSize + gap) * 5} 0)`}
        matrixSize={matrixSize}
      />
    </g>
  );
};

export default PreviewDate;
