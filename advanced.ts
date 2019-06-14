class Vehicles { 
   model = ""; 
   seats = "";
   fuelType = "";
constructor(model, seats, fuelType){
	this.model = model;
	this.seats = seats;
	this.fuelType = fuelType;
}
price(){
	alert("This car costs 100000$");
}

	

name() {
	return `<div class="container border">
			<p> Model: ${this.model}</p> 
			<p> seats: ${this.seats}</p> 
			<p> fuelType: ${this.fuelType}</p>
			<button id="btn">Price</button>
			</div>`;
	


};

}


var audi = new Vehicles("A4", "4", "Diesel");
document.write(audi.name());

// btn = document.getElementById("btn");
// btn.addEventListener("click", this.price, false)