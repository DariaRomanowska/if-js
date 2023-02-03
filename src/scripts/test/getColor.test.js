const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

const getColor = (item) => {
  if (colors.find((el) => el === item)) {
    for (let i = 0; i < colors.length; i++) {
      if (colors[i] === item) {
        return colors[++i] ?? colors[0];
      }
    }
  } else {
    return colors[0];
  }
};


test("get next color from array", function () {
  expect(getColor("magenta")).toBe("cyan");
});
