import type { FC } from "react";
import type { PreviewBorderProps } from "./preview-border.type";

export const PreviewBorderBoxed: FC<Omit<PreviewBorderProps, "type">> = ({
  width,
  height,
  ...props
}) => {
  return (
    <g {...props}>
      <path />
    </g>
  );
};

export default PreviewBorderBoxed;
