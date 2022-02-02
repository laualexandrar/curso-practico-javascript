//square code
console.group("Square");
const squareSide = 5;
console.log("Each side of the square is " + squareSide)
const perimeterOfSquare = squareSide * 4;
console.log("The the perimeter of a square is " + perimeterOfSquare + " cm");

const areaOfSquare = squareSide * squareSide;
console.log("The the area of a square is " + areaOfSquare + " cm^2");
console.groupEnd();


//triangle code
console.group("Triangle");
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
console.log(
    "Each side of the triangle has " 
    + triangleSide1 
    + "cm, " 
    + triangleSide2 
    + "cm, " 
    + triangleBase 
    + "cm. " 
    );
const perimeterOfTriangle = triangleSide1 + triangleSide2 + triangleBase;
console.log("The perimeter of the triangle is " + perimeterOfTriangle + " cm");

const areaOfTriangle = ((triangleBase *  triangleHeight)/2);
console.log("The area of the triangle is " + areaOfTriangle + " cm^2");
console.groupEnd();

//Circle
console.group("Circle");
const circleRadio = 4;
const circleDiameter = circleRadio * 2 ;
const PI = Math.PI;
const circumference = circleDiameter * PI; // perimeter circle
const circleArea = (circleRadio * circleRadio) * PI; 

console.groupEnd();

console.log("The radio of the circle is " + circleRadio + " cm");
console.log("The diameter of the circle is " + circleDiameter + " cm");
console.log("The circumference of the circle is " + circumference + " cm");
console.log("The aea of the circle is " + circleArea + " cm2");
