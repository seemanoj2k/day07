class Uber {
    constructor(pickup, destination, Totaldistance) {
        this.pickup = pickup;
        this.destination = destination;
        this.Totaldistance = Totaldistance;
    }

    cost() {
        var price = customer.Totaldistance * 12;
        return price;
    }
}
var customer = new Uber("Home", "park", 20);

console.log(customer.Totaldistance+" kms");
console.log(customer.cost()+" rupees");