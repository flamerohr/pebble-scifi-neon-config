import type { FC } from "react";
import { ColonSegment } from "./segments/colon-segment";
import { SevenSegment } from "./segments/seven-segment";

interface PreviewTimeProps {
  borderPadding: { w: number; h: number };
  scale: number;
  heightOffset: number;
}

export const PreviewTime: FC<PreviewTimeProps> = ({
  borderPadding,
  scale,
  heightOffset,
}) => {
  return (
    <g transform={`translate(${borderPadding.w} ${heightOffset})`}>
      <SevenSegment
        digit={1}
        transform={`translate(${5 * scale * 0} 0) scale(${scale})`}
      />
      <SevenSegment
        digit={4}
        transform={`translate(${5 * scale * 1} 0) scale(${scale})`}
      />
      <ColonSegment
        transform={`translate(${5 * scale * 2} 0) scale(${scale * 0.3})`}
      />
      <SevenSegment
        digit={5}
        transform={`translate(${5 * scale * 2.3} 0) scale(${scale})`}
      />
      <SevenSegment
        digit={7}
        transform={`translate(${5 * scale * 3.3} 0) scale(${scale})`}
      />
    </g>
  );
};

export default PreviewTime;
