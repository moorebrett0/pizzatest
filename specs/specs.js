describe("Pizza", function() {
    describe("priceCalc()", function() {
        it("returns the slice price of cheese slice", function() {
            var testSlice = Object.create(Pizza);
            testSlice.topping = "cheese";
            expect(testTicket.priceCalcAge()).to.eql(5);
        });
    });
});
