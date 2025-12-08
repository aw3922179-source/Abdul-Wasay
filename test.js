//Question 1

let string = "hello world"; //String
let number = 4694; //Numbers
let boolean = true; //Boolean
let Null = [] //Null
let undefine;

//Printing The Types
                                   //Outputs
console.log(typeof string);     //  STRING       
console.log(typeof number);     //  Number
console.log(typeof boolean);    //  Boolean
console.log(typeof Null);       //  Null
console.log(typeof undefine);   // Undefine

//Question 2

let p = 100 ; 
let r = 5 ; 
let t = 4 ;

let SI = (p * r * t) / 100;
console.log("Simple Interest = " , SI);

//Question 3

//compare two numbers and print:

let a = 5 ;
let b = 10 ;

console.log( a === b );


//Question 4
 
let num = 44 ; 

if(num % 2 === 0 ) {
    console.log("even");
}
    else{
        console.log("odd");
    }

//Question 5

let y = 38 ; 

if (num >= 10 && num <= 50) {
    console.log("Number is between 10 and 50")
} else {
    console.log("Number is not in  between 10 and 50")
}


//Question 6

let marks = 85;  

if (marks >= 90) {
    console.log("Grade: A");
} 
else if (marks >= 80) {
    console.log("Grade: B");
} 
else if (marks >= 70) {
    console.log("Grade: C");
} 
else {
    console.log("Grade: Fail");
}


//Question 7

let array = [ 0 , 4 , 8 , 1 , 6 , 9 ];

for (let i = 0 ; i < array.length ; i++) {
    console.log(array[i]);
}

//Question 8

function square (num) {
    return num * num
}

console.log(square(4));

//Question 9

var arrow = (m) => m * m 

console.log(arrow(8));

//Question 10

let todo = [];

todo.push("Study JavaScript");
todo.push("Complete homework");
todo.push("Practice coding");

todo.pop();

console.log(todo);


// Question 11


let student = {
    name: "Ali",
    age: 16,
    course: "Web Development"
};


console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);


//Question 12


let officer = {
    name: "Ali",
    age: 26,
    course: "Web Development",
    greet() {
        console.log("Hello! My name is " + this.name);
    }
};

officer.greet();


//Question 13

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Honda", "Civic", 2022);

console.log(car1.getInfo());
console.log(car2.getInfo());



//Question 15


function processData(data, callback) {
    console.log("Processing:", data);
    callback();
}

processData("Sample Data", function () {
    console.log("Callback executed!");
});



//Question 16

console.log("Start");

setTimeout(() => {
    console.log("End");
}, 2000);


//Question 17

let success = true;

let myPromise = new Promise((resolve, reject) => {
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


//Question 18

async function checkStatus() {
    try {
        let message = await myPromise;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

checkStatus();


//Question 19

function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: "Ali", age: 16 });
        }, 1500);
    });
}

async function showUser() {
    let user = await getUser();
    console.log(user);
}

showUser();


//Question 20

// Minification = removing all unnecessary characters from code such as spaces , linebreaks , comments and long variables.


//Question 21

// unminified
function add(a, b) {
    return a + b;
}

// minified
function add(a,b){return a+b;}


//Question 22


let product = {
    id: 1,
    name: "Laptop",
    price: 1200
};

let jsonText = JSON.stringify(product);

console.log(jsonText);
