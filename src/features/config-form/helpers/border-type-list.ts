export interface BorderTypeOption {
  value: number;
  label: string;
}

export const getBorderTypeList = (): BorderTypeOption[] => [
  {
    value: 1,
    label: "Default",
  },
  { value: 0, label: "No border" },
  {
    value: 2,
    label: "Tightly boxed",
  },
];
