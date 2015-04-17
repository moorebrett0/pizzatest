var Pizza = {
    priceCalc: function() {
        return 5 + (this.pizza_topping);
    }
};

$(document).ready(function() {
    $("form#pizza").submit(function(event) {
        event.preventDefault();

        var slice = parseInt($('#pizza_topping').val());

        var newPizza = Object.create(Pizza);

        newPizza.person_age = slice;

        var pizzaPrice = newPizza.priceCalc();

        $(".result h3").text(pizzaPrice);
    });
});
