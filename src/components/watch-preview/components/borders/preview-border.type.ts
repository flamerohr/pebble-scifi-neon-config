import type { SVGAttributes } from "react";

export interface PreviewBorderProps extends SVGAttributes<SVGElement> {
  type: string;
  width: number;
  height: number;
}
