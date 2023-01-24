
const sum = (x) => (y) => {
  return x + y;
};
console.log(sum(5)(2));

 const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

export const getColor = (item) => {
  if (colors.find((el) => el === item)) {
    for (let i = 0; i < colors.length; i++) {
      if (colors[i] === item) {
        return colors[++i] ?? colors[0];
      }
    }
  } else {
    return colors[0];
  }
}

