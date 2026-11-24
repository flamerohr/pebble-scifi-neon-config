import { useMemo, type FC, type SVGAttributes } from "react";
import { Dot5x5Segment } from "./segments/dot-5x5-segment";

interface PreviewPeriodProps extends SVGAttributes<SVGElement> {
  borderPadding: { w: number; h: number };
  height: number;
  matrixSize?: number;
  width: number;
  scale: number;
}

const gap = 3;

export const PreviewPeriod: FC<PreviewPeriodProps> = ({
  borderPadding,
  height: heightParam,
  width: widthParam,
  matrixSize = 4,
  scale = 1,
  ...props
}) => {
  const [segmentSize, widthOffset, heightOffset] = useMemo(() => {
    const size = matrixSize * 5 + 4;

    const width = Math.round(widthParam - borderPadding.w - (size * 2 + gap * 1) / 2);

    const height = Math.round(heightParam + 4.5 * scale - (size * 2 + gap * 1) / 2);

    return [size, width, height];
  }, [matrixSize, widthParam]);

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
        transform={`translate(0 ${segmentSize + gap})`}
        matrixSize={matrixSize}
      />
    </g>
  );
};

export default PreviewPeriod;
