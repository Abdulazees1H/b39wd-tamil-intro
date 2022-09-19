console.log("This is my first java file!!!");
//data type
console.log(5);
//primitive data types
console.log(typeof 5);
console.log(typeof "cool");
console.log(typeof true);
console.log(typeof undefined);
//non primitive data types
console.log(typeof [2,200,80]);
console.log(typeof {name : "Gayatri", class:"b39WD"});
//declaration assignment
var x=5;
var y; //only declaration
console.log(typeof x); //number
console.log(typeof y); //undefined

// not defined (error) vs undefined (declared the variable but not assigned)
console.log(y); //undefined
//console.log(z); //z is not defined

const x1 = NaN;
console.log("abc"/2); // JS is number->NaN
console.log(typeof x1);
//type casting / coercion-changing data type
//1. implicit 2. explicit
console.log("5" + 5, typeof ("5"+5)); //"55" implicit
console.log("5" - 5, typeof("5"- 5)); //implicit
console.log(parseInt("5")+5); // Explicit
console.log(Number("5")+ 5); //Explicit
console.log(+"5" + 5); //Explicit

console.log(typeof null);
var y = null;

console.log(5=="5");
console.log(5 ==="5");
console.log(5 === parseInt("5"));
// myth
//1. == -> only value
//2. ==== -> value & data type check

// ==allows type casting
//"5" -> 5
//5 == 5 //true
// === does not allow casting
// 5 === "5" // false
// var j1 = [5,6,7]; //array (multiple values)
// var j2 = [5,6,7];
// var j3 = j1;

// var t1 = 5;
// var t2 = 5;

// console.log(j1 === j3) // true  
// console.log(j1 === j2) // No // false
// //are they stored in same memory address
// console.log(t1 === t2)

// x1 -> [5,6,7]
// x2 -> [5,6,7]

// j1 -> x1
// j2 -> x2
// j3 -> x1

var j1 = [5,6,7]; 
var j2 = [5,6,7];
var j3 = j1;

j1.push(2);
j2.push(10);
j3.push(100);

console.log(j1,j2,j3);
// spread operator
var u1 = [90, 10, 100];
var u2 = [...u1]; //copy by value
console.log(u1, u2);
console.log(u1 === u2);
//for array and object it will check by memory
var player = {
        name: "Gukesh D",
        game: "chess",
        age: 16,
        rating: 2699,
        title: "Grandmaster",
};
//dot syntax
console.log(player.title); 
//box syntax
console.log(player["title"]);
//or
var keyName = "game";
console.log(player[keyName]);

console.log(player);

player.rating = player.rating+100;

console.log(player);

player.nationality = "indian";
console.log(player);
//Object vs JSON
//JSON - Javascript object notation-string datatype
console.log(JSON.stringify(player));
console.log(typeof JSON.stringify(player));
//JSON - understood by all languages




