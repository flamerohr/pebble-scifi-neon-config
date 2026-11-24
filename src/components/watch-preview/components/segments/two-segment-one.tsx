import { useMemo, type FC, type SVGAttributes } from "react";

interface TwoSegmentOneProps extends SVGAttributes<SVGElement> {
  digit: number;
}

export const TwoSegmentOne: FC<TwoSegmentOneProps> = ({ digit, ...props }) => {
  const segments = useMemo(() => {
    switch (digit) {
      case 0:
        return [0, 0];
      case 1:
        return [1, 1];
      default:
        return [];
    }
  }, [digit]);

  if (segments.length !== 2) {
    return null;
  }
  return (
    <g {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className={!!segments[0] ? "time-active" : "inactive"}
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
        className={!!segments[1] ? "time-active" : "inactive"}
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
    </g>
  );
};
