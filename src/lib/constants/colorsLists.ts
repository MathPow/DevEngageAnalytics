export type ColorsList = {
  [key: string]: string[];
};

export const lightColorsLists: ColorsList = {
  blue: ["#eee6ff", "#b6d9e6", "#d6e9f4", "#e6ffff"],
  green: ["#b3e2d5", "#c8f4d4", "#e7f9d0", "#e6f9f0"],
  red: ["#fae3eb", "#f9d1d1", "#ff6969", "#ff8c8c"],
  orange: ["#fcc0ac", "#fff5ed", "#faf7d7", "#ffcd87"],
  pink: ["#f7a2c5", "#f7cdd5", "#fae6fc", "#fef3f6"],
  purple: ["#e5dff2", "#ccabe0", "#dea0ce", "#f4d6ea"],
  white: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  black: ["#1c1c1c", "#1c1c1c", "#1c1c1c", "#1c1c1c"],
  gray: ["#a8a8a8", "#d0d0d0", "#e4e4e4", "#f2f2f2"],
};

export const darkColorsLists: ColorsList = {
  blue: ["#19202e", "#273445", "#394e59", "#251b40"],
  green: ["#2e4a44", "#4c6b58", "#1d2d2a", "#7b9c8e"],
  red: ["#2b1e1e", "#4a2d2d", "#7a3f3f", "#b94a4a"],
  orange: ["#4a3c1a", "#2d1a0e", "#7a5c3b", "#b58d4f"],
  pink: ["#2a1e2a", "#b57c8b", "#4b2d3e", "#7b4e5b"],
  purple: ["#2a1d3d", "#4b3e6c", "#6c5a9b", "#9a7cbf"],
  white: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  black: ["#1c1c1c", "#1c1c1c", "#1c1c1c", "#1c1c1c"],
  gray: ["#1e1e1e", "#3a3a3a", "#595959", "#7a7a7a"],
};

export function isColorInList(color: string) {
  for (const key in lightColorsLists) {
    if (color === key) {
      return true;
    }
  }
  return false;
}
