function Car(make, model, year, color, seats, passengers){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.seats = seats;
    this.running = false;
    this.owner = "manufacturer";
    this.previousOwners = [];
    this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner){
    newOwner = "Lenny";
    this.previousOwners.push(this.owner);
    this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
    this.color = newColor;
};

Car.prototype.start = function() {
    this.running = true;
};

Car.prototype.off = function(){
    this.running = false;
};

Car.prototype.driveTo = function(destination){
    if (this.running === true) {
        console.log('driving to ' + destination);
        return true;
    } else {
        return false;
    }
};

Car.prototype.park = function(){
    if (this.running === true) {
        return false;
    } else {
        console.log('parked!!');
        return true;
    };
};

Car.prototype.pickUp = function(name){
    if (this.running !== true || (this.passengers.length + 1) >= this.seats){
        return false;
    } else {
        console.log('driving to pick up ' + name);
        this.passengers.push(name);
        return true;
    };
};

Car.prototype.dropOff = function(name){
    var passengerIndex = this.passengers.indexOf(name);
    if (passengerIndex < 0 || this.running === false) {
        return false;
    } else {
    // console.log('driving to drop off ' + name);
        this.passengers.splice(passengerIndex, 1);
        return true;
    };
};

Car.prototype.passengerCount = function(){
    return this.passengers.length;
};


// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;