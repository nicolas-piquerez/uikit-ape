import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#e89d39ff",
  primaryBright: "#ffd54fff",
  primaryDark: "#0098A1",
  secondary: "#4e93eaff",
  success: "#31D0AA",
  warning: "#FFB237",
  green: "#4e93eaff",
  yellow: "#FFB300",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#4e93eaff",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#1199faff;",
  textDisabled: "#BDC2C4",
  textSubtle: "#4e93eaff",
  borderColor: "#4e93eaff",
  card: "#FFFFFF",
  yellow: "#FFB300",
  white: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#4e93eaff",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#27262c",
  yellow: "#FFB300",
  white: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
