const sum = (x) => (y) => {
    return x + y;
};

test("sum", () => {
    expect(sum(5)(2)).toBe(7);
});
