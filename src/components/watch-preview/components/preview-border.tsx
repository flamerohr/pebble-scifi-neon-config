import type { FC } from "react";
import type { PreviewBorderProps } from "./borders/preview-border.type";
import PreviewBorderNeon from "./borders/preview-border-neon";
import PreviewBorderBoxed from "./borders/preview-border-boxed";

export const PreviewBorder: FC<PreviewBorderProps> = ({ type, ...props }) => {
  if (type === "1") {
    return <PreviewBorderNeon {...props} />;
  }
  if (type === "2") {
    return <PreviewBorderBoxed {...props} />;
  }
  return null;
};
