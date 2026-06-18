import { useMemo, type FC, type SVGAttributes } from "react";
import { get5x5Code } from "../helpers/get-5x5-code";

interface Dot5x5SegmentProps extends SVGAttributes<SVGElement> {
  letter: string;
  activeClassName: string;
  matrixSize?: number;
}

export const Dot5x5Segment: FC<Dot5x5SegmentProps> = ({
  letter,
  fill,
  activeClassName,
  matrixSize = 4,
  ...props
}) => {
  const code = useMemo(() => get5x5Code(letter), [letter]);

  if (!code) {
    return null;
  }
  return (
    <g {...props}>
      {[...Array(5)].map((_, i) =>
        [...Array(5)].map((_, j) => (
          <rect
            x={j * (matrixSize + 1)}
            y={i * (matrixSize + 1)}
            width={matrixSize}
            height={matrixSize}
            className={code[i] & (0b10000 >> j) ? activeClassName : "inactive"}
          />
        )),
      )}
    </g>
  );
};
