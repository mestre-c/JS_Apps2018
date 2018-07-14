// Arrow functions
var add = (x, y) => x + y;
console.log(
  add(2,3)
);

var multiply = (a, b) => { return a * b; };
console.log(
  multiply(4, 7)
);

// iterate over the indexes
var pets = ['dog', 'cat', 'mouse', 'rabbit'];

for (index in pets) {
  console.log(
    pets[index]
  );
}

// iterate over the values and objects and everything
for (value of pets) {
  console.log(value);
}
