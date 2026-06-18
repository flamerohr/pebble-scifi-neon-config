import type { FC } from "react";
import type { PreviewBorderProps } from "./preview-border.type";

export const PreviewBorderNeon: FC<Omit<PreviewBorderProps, "type">> = ({
  width,
  height,
  ...props
}) => {
  const start1 = 114;
  const start2 = 84;
  const size = 40;

  return (
    <g {...props}>
      <path
        className="border-1"
        strokeWidth={2}
        d={`
        M 32              2
        L ${width - 32}   2
        L ${width - 2}    32
        L ${width - 2}    ${height - 32}
        L ${width - 32}   ${height - 2}
        L 32              ${height - 2}
        L 2               ${height - 32}
        L 2               32
        L 32              2
        Z
      `}
      />
      <path
        className="border-2"
        strokeWidth={2}
        d={`
        M ${width - 6}          ${start1}
        L ${width - 6}          ${start1 + size}
        M ${width - 6}          ${start1 + size * 1.5}
        L ${width - 6}          ${height - 34}
        M ${width - 6}          ${height - 34}
        L ${width - 21}         ${height - 19}
        M ${width - 34}         ${height - 6}
        L ${width - 34 - size}  ${height - 6}
        M 6                     ${34 + start2}
        L 6                     ${34 + start2 - size}
        M 6                     ${34 + start2 - size * 1.5}
        L 6                     34
        M 6                     34
        L 21                    19
        M 36                    6
        L ${36 + size}          6
      `}
      />
    </g>
  );
};

export default PreviewBorderNeon;
