// Shape class
function Shape() {
}

Shape.prototype.X = 0;
Shape.prototype.Y = 0;

Shape.prototype.move = function(x, y) {
        this.X = x;
        this.Y = y;
}

Shape.prototype.distance_from_origin = function() {
      return Math.sqrt(this.X * this.X + this.Y * this.Y);
}

Shape.prototype.area = function() {
    throw new Error("Need a 2d form!");
}

// Square class
function Square() {
}

Square.prototype = new Shape(); // inherit from Shape class
Square.prototype__proto__ = Shape.prototype; // inherit al the functionality of the Shape class
Square.prototype.Width = 0;

Square.prototype.area = function() {
  return this.Width * this.Width;
}

var sq = new Square();
sq.move(5, 5);
sq.Width = 15;
console.log(sq.distance_from_origin());
console.log(sq.area());


// Rectangle class
function Rectangle() {
}

Rectangle.prototype = new Square();
Rectangle.prototype__proto__ = Square.prototype;
Rectangle.prototype.Height = 0;

Rectangle.prototype.area = function() {
  return this.Width * this.Height;
}

var rect = new Rectangle();
rect.move(-5, -5);
rect.Width = 15;
rect.Height = 2;
console.log(rect.distance_from_origin());
console.log(rect.area());

console.log(sq instanceof Square);
console.log(sq instanceof Shape);
console.log(sq instanceof Rectangle);
console.log(rect instanceof Square);
console.log(rect instanceof Shape);
