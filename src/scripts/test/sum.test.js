const sumFunc = (x) => (y) =>{
    return x + y;
}


test("sum", () => {
    const resSumFunc = 5 + 2;
    expect(resSumFunc).toBe(7);
});
