import { useMemo, type FC, type SVGAttributes } from "react";

interface SevenSegmentProps extends SVGAttributes<SVGElement> {
  digit: number;
}

export const SevenSegment: FC<SevenSegmentProps> = ({ digit, ...props }) => {
  const segments = useMemo(() => {
    switch (digit) {
      case 0:
        return [1, 1, 1, 1, 1, 1, 0];
      case 1:
        return [0, 1, 1, 0, 0, 0, 0];
      case 2:
        return [1, 1, 0, 1, 1, 0, 1];
      case 3:
        return [1, 1, 1, 1, 0, 0, 1];
      case 4:
        return [0, 1, 1, 0, 0, 1, 1];
      case 5:
        return [1, 0, 1, 1, 0, 1, 1];
      case 6:
        return [1, 0, 1, 1, 1, 1, 1];
      case 7:
        return [1, 1, 1, 0, 0, 0, 0];
      case 8:
        return [1, 1, 1, 1, 1, 1, 1];
      case 9:
        return [1, 1, 1, 1, 0, 1, 1];
      default:
        return [];
    }
  }, [digit]);

  if (segments.length !== 7) {
    return null;
  }
  return (
    <g {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={!!segments[0] ? "time-active" : "inactive"}
        d={`
      M 1     1
      L 1.5   0.5
      L 3.5   0.5
      L 4     1
      L 3.5   1.5
      L 1.5   1.5
      L 1     1
      `}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={!!segments[1] ? "time-active" : "inactive"}
        d={`
      M 4.25  1.25
      L 4.75  1.75
      L 4.75  3.75
      L 4.25  4.25
      L 3.75  3.75
      L 3.75  1.75
      L 4.25  1.25
      `}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={!!segments[2] ? "time-active" : "inactive"}
        d={`
      M 4.25  4.75
      L 4.75  5.25
      L 4.75  7.25
      L 4.25  7.75
      L 3.75  7.25
      L 3.75  5.25
      L 4.25  4.75
      `}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={!!segments[3] ? "time-active" : "inactive"}
        d={`
      M 1     8
      L 1.5   7.5
      L 3.5   7.5
      L 4     8
      L 3.5   8.5
      L 1.5   8.5
      L 1     8
      `}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={!!segments[4] ? "time-active" : "inactive"}
        d={`
      M 0.75  4.75
      L 1.25  5.25
      L 1.25  7.25
      L 0.75  7.75
      L 0.25  7.25
      L 0.25  5.25
      L 0.75  4.75
      `}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={!!segments[5] ? "time-active" : "inactive"}
        d={`
      M 0.75  1.25
      L 1.25  1.75
      L 1.25  3.75
      L 0.75  4.25
      L 0.25  3.75
      L 0.25  1.75
      L 0.75  1.25
      `}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={!!segments[6] ? "time-active" : "inactive"}
        d={`
      M 1     4.5
      L 1.5   4
      L 3.5   4
      L 4     4.5
      L 3.5   5
      L 1.5   5
      L 1     4.5
      `}
      />
    </g>
  );
};
