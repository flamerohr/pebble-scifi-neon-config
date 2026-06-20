import type { FC } from "react";
import type { PreviewBorderProps } from "./preview-border.type";

const offset = 15;

export const PreviewBorderBoxed: FC<Omit<PreviewBorderProps, "type">> = ({
  width,
  height,
  ...props
}) => {
  return (
    <g {...props}>
      <rect
        className="border-1"
        strokeWidth={2}
        x={-offset}
        y={-offset}
        width={width * 0.3}
        height={height * 0.2}
        rx={5}
      />
      <rect
        className="border-1"
        strokeWidth={2}
        x={width * 0.7 + offset}
        y={height * 0.8 + offset}
        width={width * 0.3}
        height={height * 0.2}
        rx={5}
      />
      <rect
        className="border-1"
        strokeWidth={2}
        x={-offset}
        y={height * 0.8 + offset}
        width={width * 0.3}
        height={height * 0.2}
        rx={5}
      />
      <rect
        className="border-1"
        strokeWidth={2}
        x={width * 0.7 + offset}
        y={-offset}
        width={width * 0.3}
        height={height * 0.2}
        rx={5}
      />
      <rect
        className="border-2"
        strokeWidth={2}
        x={-offset}
        y={-offset}
        width={width * 0.25}
        height={height * 0.15}
        rx={3}
      />
      <rect
        className="border-2"
        strokeWidth={2}
        x={width * 0.75 + offset}
        y={height * 0.85 + offset}
        width={width * 0.25}
        height={height * 0.15}
        rx={3}
      />
      <rect
        className="border-2"
        strokeWidth={2}
        x={-offset}
        y={height * 0.85 + offset}
        width={width * 0.25}
        height={height * 0.15}
        rx={3}
      />
      <rect
        className="border-2"
        strokeWidth={2}
        x={width * 0.75 + offset}
        y={-offset}
        width={width * 0.25}
        height={height * 0.15}
        rx={3}
      />
      <rect
        className="border-2"
        strokeWidth={2}
        x={-offset}
        y={-offset}
        width={width + offset * 2}
        height={height + offset * 2}
        rx={3}
      />
    </g>
  );
};

export default PreviewBorderBoxed;
