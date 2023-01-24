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
}

const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

test("get next color from array", function (){
    expect(getColor(0)).toBe(colors[0]);
});
