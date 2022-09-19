// // document vs window
// console.log(document);
// // document - DOM
// // console.log(document.getElementsByTagName("h1")[0].textContent);
// // console.log(document.getElementsByTagName("p")[0].textContent);
// console.log(document.querySelector("h1").textContent)
// console.log(document.querySelector("p").textContent)

// // (window.alert("Cool page 🐱‍🏍 "));
// // (window.confirm("Are you sure you want to close?"));

// // Array iteration (loop)
// // Find the highest mark
// var marks = [90,80,40,99,45,30];

// // 1. for loop
// // 2. for... in loop
// // 3. for... of loop
// // 4. foreach loop
// console.log(marks[1]);
// console.log("Length of the array", marks.length);
// //i < 5 
// // for (let i=0; i < marks.length; i++) {
// //     console.log("i=",i,marks[i]);
// // }

// // in -> index
// // for (var i in marks){
// //     console.log("index=", i,marks[i]);
// // }

// // of -> value
// // for (var mark of marks) {
// //     console.log(mark);     
// // }

// // marks.forEach(function(mark){
// //   console.log(mark);  
// // });
// var max =0;
// for (var mark of marks){
//     if(mark > max){
//         max = mark;
//     }
// }

// console.log("The highest mark", max);

// var player = {
//     name: "Gukesh D",
//     game: "chess",
//     age: 16,
//     rating: 2699,
//     title: "Grandmaster",
// };

// //in -> key
// for (var key in player){
//     console.log(key, player[key]);
// }

// console.log(Object.keys(player));
// console.log(Object.values(player));

// for (var key of player) {
//     console.log(key, player[key]);
// }
let arr=[3,5,68,5,63];
// for (let key of arr) {
    // }
    let count=0;
    arr.forEach(foo);
    function foo()
    {
        count++;
        console.log(count);

    }


    