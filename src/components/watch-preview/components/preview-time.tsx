import type { FC } from "react";
import { ColonSegment } from "./segments/colon-segment";
import { SevenSegment } from "./segments/seven-segment";
import PreviewPeriod from "./preview-period";
import { TwoSegmentOne } from "./segments/two-segment-one";

interface PreviewTimeProps {
  time12h?: boolean;
  borderPadding: { w: number; h: number };
  scale: number;
  width: number;
  heightOffset: number;
  matrixSize?: number;
}

export const PreviewTime: FC<PreviewTimeProps> = ({
  time12h,
  borderPadding,
  scale,
  width,
  heightOffset,
  matrixSize = 4,
}) => {
  const xOffset = (time12h ? 5 * 0.3 : 5) * scale;

  return (
    <>
      <g transform={`translate(${borderPadding.w} ${heightOffset})`}>
        {time12h ? (
          <TwoSegmentOne
            digit={1}
            transform={`translate(${5 * scale * 0} 0) scale(${scale})`}
          />
        ) : (
          <SevenSegment
            digit={1}
            transform={`translate(${5 * scale * 0} 0) scale(${scale})`}
          />
        )}
        <SevenSegment
          digit={1}
          transform={`translate(${xOffset + 5 * scale * 0} 0) scale(${scale})`}
        />
        <ColonSegment
          transform={`translate(${xOffset + 5 * scale * 1} 0) scale(${scale * 0.3})`}
        />
        <SevenSegment
          digit={5}
          transform={`translate(${xOffset + 5 * scale * 1.3} 0) scale(${scale})`}
        />
        <SevenSegment
          digit={7}
          transform={`translate(${xOffset + 5 * scale * 2.3} 0) scale(${scale})`}
        />
      </g>
      {time12h && (
        <PreviewPeriod
          borderPadding={borderPadding}
          height={heightOffset}
          width={width}
          scale={scale}
          matrixSize={matrixSize}
        />
      )}
    </>
  );
};

export default PreviewTime;
