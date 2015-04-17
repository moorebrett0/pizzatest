var Pizza = {
    priceCalc: function() {
        return 5 + (this.pizza_topping);
    }
};

$(document).ready(function() {
    $("form#price").submit(function(event) {
        event.preventDefault();

        var slice = parseInt($('#pizza_topping').val());
        console.log(slice);

        var newPizza = Object.create(Pizza);

        newPizza.pizza_topping = slice;

        var pizzaPrice = newPizza.priceCalc();
        console.log(pizzaPrice);

        $(".result h3").text("Your pizza will cost " + pizzaPrice + " dollars");
    });
});
