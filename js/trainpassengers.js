var numPassengers = 0
numPassengers += 3
console.log(numPassengers);
var trainCapacity = 60
console.log("The capacity train: "+trainCapacity);
numPassengers--
console.log(numPassengers);
var occupancy = numPassengers + " passengers present, with " + (trainCapacity-numPassengers) + " seats remaining."
console.log(occupancy);
