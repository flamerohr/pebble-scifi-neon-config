import { useMemo, type FC, type SVGAttributes } from "react";
import { Dot5x5Segment } from "./segments/dot-5x5-segment";

interface PreviewBluetoothProps extends SVGAttributes<SVGElement> {
  borderPadding: { w: number; h: number };
  heightOffset: number;
  matrixSize?: number;
  width: number;
}

const gap = 3;

export const PreviewBluetooth: FC<PreviewBluetoothProps> = ({
  borderPadding,
  heightOffset,
  width,
  matrixSize = 4,
  ...props
}) => {
  const [segmentSize] = useMemo(() => {
    const size = matrixSize * 5 + 4;

    return [size];
  }, [matrixSize, width]);

  return (
    <g {...props} transform={`translate(${borderPadding.w} ${heightOffset})`}>
      <Dot5x5Segment
        letter="a"
        activeClassName="bluetooth-active"
        matrixSize={matrixSize}
      />
      <Dot5x5Segment
        letter="b"
        activeClassName="bluetooth-active"
        transform={`translate(${segmentSize + gap} 0)`}
        matrixSize={matrixSize}
      />
    </g>
  );
};

export default PreviewBluetooth;
