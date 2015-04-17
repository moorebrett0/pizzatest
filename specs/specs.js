describe("Pizza", function() {
    describe("priceCalc()", function() {
        it("will return the slice price of just cheese toppings", function() {
            var testPizza = Object.create(Pizza);
            testPizza.pizza_topping = 0;
            expect(testPizza.priceCalc()).to.equal(5);
        });

        it("will return the slice price of pepperoni topping", function() {
            var testPizza = Object.create(Pizza);
            testPizza.pizza_topping = 1;
            expect(testPizza.priceCalc()).to.equal(6);
        });
        it("will return the slice price of hawaiian topping", function() {
            var testPizza = Object.create(Pizza);
            testPizza.pizza_topping = 2;
            expect(testPizza.priceCalc()).to.equal(7);
        });
    });
});
