const cars = [1, 2, 3, 4, "Saab", "Volvo", "BMW"];
cars.push("Bugatti");
console.log(cars);
cars.unshift(0);
console.log(cars);
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);

for(const item of cars) {
    console.log(item); 
}
