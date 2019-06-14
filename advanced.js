var Vehicles = /** @class */ (function () {
    function Vehicles(model, seats, fuelType) {
        this.model = "";
        this.seats = "";
        this.fuelType = "";
        this.model = model;
        this.seats = seats;
        this.fuelType = fuelType;
    }
    Vehicles.prototype.price = function () {
        alert("This car costs 100000$");
    };
    Vehicles.prototype.name = function () {
        return "<div class=\"container border\">\n\t\t\t<p> Model: " + this.model + "</p> \n\t\t\t<p> seats: " + this.seats + "</p> \n\t\t\t<p> fuelType: " + this.fuelType + "</p>\n\t\t\t<button id=\"btn\">Price</button>\n\t\t\t</div>";
    };
    ;
    return Vehicles;
}());
var audi = new Vehicles("A4", "4", "Diesel");
document.write(audi.name());
// btn = document.getElementById("btn");
// btn.addEventListener("click", this.price, false)
