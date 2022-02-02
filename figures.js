//square code
console.group("Square");
function perimeterOfSquare (side){
    return side * 4;
}
function areaOfSquare (side){
    return side * side;
} 
console.groupEnd();

//triangle code
console.group("Triangle");
function perimeterOfTriangle (side1, side2, base){
    return side1 + side2 + base;
} 
function areaOfTriangle (base, height){
    return (base*height)/ 2
} 
console.groupEnd();

//Circle
console.group("Circle");
function circleDiameter (radio){
    return radio * 2
}
const PI = Math.PI;
function circlePerimeter (radio){
    const diameter = circleDiameter(radio);
    return diameter * PI;  
} 
function circleArea (radio) {
    return (radio * radio) * PI; 
} 
console.groupEnd();

// html

function calculateSquarePerimeter() {
    const input = document.getElementById("SquareInput");
    const value = Number(input.value);

    const perimeter = perimeterOfSquare(value);
    alert(perimeter);
}

function calculateSquareArea(){
    const input = document.getElementById("SquareInput");
    const value = Number(input.value);

    const area = areaOfSquare(value);
    alert(area);
}

function calculateTrianglePerimeter() {
    const inputOne = document.getElementById("TriangleSideOneInput");
    const sideOne = Number(inputOne.value);

    const inputTwo = document.getElementById("TriangleSideTwoInput");
    const sideTwo = Number(inputTwo.value);

    const inputBase = document.getElementById("TriangleBaseInput");
    const base = Number(inputBase.value);

    const perimeter = perimeterOfTriangle (sideOne, sideTwo, base);
    alert(perimeter);
}

function calculateTriangleArea(){
    const inputBase = document.getElementById("TriangleBaseInput");
    const base = Number(inputBase.value);

    const inputHeight = document.getElementById("TriangleHeightInput");
    const triangleHeight = Number(inputHeight.value);

    const area = areaOfTriangle( base, triangleHeight);
    alert(area);
}
function calculateCirclePerimeter(){
    const input = document.getElementById("CircleInput");
    const radioValue = Number(input.value);
    
    const perimeter = circlePerimeter(radioValue);
    alert(perimeter);
}
function calculateCircleArea(){
    const input = document.getElementById("CircleInput");
    const radioValue = Number(input.value);

    const area = circleArea(radioValue)
    alert(area);
}