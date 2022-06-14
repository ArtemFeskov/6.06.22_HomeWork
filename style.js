// var a =5;
// var b =true;
// var c ="string";
// var d ="1024";


// var str = String(c);
// console.log(typeof(a),a);
// console.log(typeof(b),b);
// console.log(typeof(c),c);
// console.log(typeof(str),str);


// console.log("uppercase: ", str.toUpperCase())
// console.log("uppercase: ", str.toLowerCase())
// console.log("uppercase: ", str)


// var a = 2 **3;
// a++;
// console.log("a: ", a )
// console.log("a: ", a++)
// console.log("a: ", a )
// console.log("a: ", a++ )

// console.log(isNaN(a));
// console.log(isNaN(b));
// console.log(isNaN(c));
// let day = parseInt (prompt (" Enter day: 1 - 7"));
// switch (day) {
//     case 1: console.log( "Monday ") ; break;
//     default:
//     console.log ( "Wrong input");
//     break;
// }



//1
// var num = 3;
// console.log(num = parseInt(prompt("Enter number:")))
// if(num%2==0)
// {
//     console.log("number is parne");
// }
// else{
//     console.log("number is NEparne");
// }
// //2
// var a = parseInt(prompt("Enter first number:"));
// var b = parseInt(prompt("Enter second number:"));

// a > b ? console.log("a was biggest") : console.log("b was biggest") 

// //3
// var d = parseInt(prompt("Task 3 Enter number:"));

// if(d==0)
// {
//     console.log("number is null");
// }
// else if(d >0){
//     console.log("number is biggest of null");
// }
// else if(d < 0){
//     console.log("number is under null");
// }


var n = parseInt(prompt("Enter first number:"));
var m = parseInt(prompt("Enter second number:"));

 
var a = Number;
 var b = Number;
if (n < m) {
    a = m;
    b =n;
}
else {
    a =n; b=m;
}

for (let i = b; i <= a; i++) {
    console.log(i);
}

console.log("\n\nParni:");
for (var i = b; i <= a; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}
console.log("\n\nNE Parni:");
for (var i = b; i <= a; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}
console.log("\n\n Kratni 7:");
for (var i = b; i <= a; i++) {
    if (i%7 == 0) {
        console.log(i);
    }
}
    
    









