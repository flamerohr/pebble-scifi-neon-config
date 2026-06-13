export interface BorderTypeOption {
  value: number;
  label: string;
}

export const getBorderTypeList = (bw = false): BorderTypeOption[] => [
  {
    value: 1,
    label: "Default Neon",
  },
  { value: 0, label: "No border" },
  {
    value: 2,
    label: "Neon boxed",
  },
];
