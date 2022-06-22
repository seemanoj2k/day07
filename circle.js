//As per sir Instructed 
class Circle {
    constructor(radius,color) {
        this.radius =1.0;
        this.color = "Red"; 
         if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }

        
    }
    
    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(rad) {
        this.radius = rad;
    }

    setColor(col) {
        this.color = col;
    }
    toString(){
        return "Radius : "+this.radius+" Color : "+this.color;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    } 
    getCircumference(){
      return 2*Math.PI*this.radius;

  }
}
var c1 = new Circle();
console.log("no parameter:" +c1.toString());
var c2 = new Circle(3.2);
console.log("one parameter:" +c2.toString());
var c3 = new Circle(2.6, 'Yellow');
console.log(c3.getRadius());
c3.setRadius(3.9);
console.log(c3.getRadius());
console.log(c3.getColor());
c3.setColor("Blue");
console.log(c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());
