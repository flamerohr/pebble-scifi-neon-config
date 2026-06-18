import type { FC, SVGAttributes } from "react";

export const ColonSegment: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <g {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="colon-active"
        d="
        M 1.5 8
        L 3.5 8
        L 4.5 9
        L 4.5 11
        L 3.5 12
        L 1.5 12
        L 0.5 11
        L 0.5 9
        L 1.5 8
        Z

        M 1.5 20
        L 3.5 20
        L 4.5 21
        L 4.5 23
        L 3.5 24
        L 1.5 24
        L 0.5 23
        L 0.5 21
        L 1.5 20
        Z
      "
      />
    </g>
  );
};
