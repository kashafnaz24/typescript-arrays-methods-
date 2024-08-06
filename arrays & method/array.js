//ARRYS
// using type[] syntax:
var shoping = [
    { dresses: "pink", slipers: "white" },
    { dresses: "yellow", slipers: "black" },
    { dresses: "black", slipers: "red" },
];
var dresses = shoping.map(function (color) { return color.dresses; });
console.log(dresses);
// // filter array
// let Numb : number[]= [1 , 2 , 3 , 4 , 5 ,6];
// let modulus = Numb.filter(n => n % 2 ===0);
// console.log(modulus);
// interface Shoping {
//     dresses: string;
//     slipers : string;
// } 
// let shoping1 : Shoping[]=[
//     {dresses: "pink",slipers : "white"},
//     {dresses: "yellow",slipers : "black"},
//     {dresses: "black",slipers : "red"},
// ]
// let dress = shoping1.filter(shoping1 => shoping1.dresses ==="pink");
// console.log(dress);
// let words: string[] = ["apple", "banana", "grape", "orange", "kiwi"];
// let longWords = words.filter(word => word.length > 5);
// console.log(longWords); 
// interface Person {
//     name: string;
//     age: number;
// }
// let peoples: Person[] = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 },
//     { name: "David", age: 20 }
// ];
// let adults = peoples.filter(person => person.age >= 30);
// console.log(adults); 
//reduce .right
// let numbers: Array<number> = [1, 2, 3, 4];
// let result = numbers.reduceRight(function(a, b) { return a + b });
//callback function:The callback function (a, b) => a + b takes two arguments:
// Step 1: 3 + 4 = 7 (rightmost element 4 and element to its left 3)
// Step 2: 2 + 7 = 9 (element 2 and accumulated result 7) here 2 is accumulator & 7 is current value
// Step 3: 1 + 9 = 10 (leftmost element 1 and accumulated result 9)here 1 is accumulator & 9 is current value
// console.log(result);
// let number : number[] = [2 ,4,6,8,10];
// let evennumber = number.reduceRight((a,b)=>a-b);
// console.log(evennumber);
// //reduce
// let string1 : string[] = ["hellow","  ","world", " ","!"];
//let string2= string1.reduce(function)
//tuple type
// let john :[string , string , string] = ["tall","dark" ,"handsome"];
// console.log(john);
// let car ={
//index of
//Every array element has an index. This method returns the index of an element in an array.
// let cars : string[] = ["vivo", "toyota", "suzuki"]
// console.log(cars.indexOf("vivo"));
// let danial : string[] =["dainal nagori",  "age35","rollno36"] ;
// console.log(danial.indexOf("dainal nagori"));
// let car : string[] = []
// console.log(car.indexOf('vivo'));//output is -1
//lastindexof()
// let quiz : string[]=[];
// console.log("the last index is" + quiz.lastIndexOf("subjective"));//output is -1
// let quizes : string[]=["Mcqs","objective","short Q/A","subjective"];
// console.log("the last index is" + quizes.lastIndexOf("subjective"));
//concat
// let fruits : string[] =["mango", "apple" ,"banana", "grappes"];
// let vegetable : string[] =["tomato", "potato" ,"ginger", "garlic"];
// let grossery =vegetable.concat(fruits);
// console.log(grossery);
//join()
// let fruit : string[] =["mango", "apple" ,"banana", "grappes"];
// let joining = fruit.join("+") ;
// console.log(joining);
// let vegetable1 : string[] =["tomato", "potato" ,"ginger", "garlic"];
// let join1 = vegetable1.join(";");
// console.log(join1);
//let vegetable2 : string[] =["tomato", "potato" ,"ginger", "garlic"];
//console.log(vegetable2);
//reverse
// let vegetable2 : string[] =["tomato", "potato" ,"ginger", "garlic"];
// console.log( vegetable2.reverse());
//slice array
// let vegetable3 : string[] =["tomato", "potato" ,"ginger", "garlic"];
//  console.log( vegetable3.slice(0,2));
//splice array
// let vegetable4 : string[] =["tomato", "potato" ,"ginger", "garlic","mango", "apple" ,"banana", "grappes"];
// let splice = vegetable4.splice(8,0,"water malon");
// console.log(vegetable4);
// let  fruit1 : string[] =["mango", "apple" ,"banana", "grappes"];
// fruit1.splice(2,1,"orange");
// console.log(fruit1);
//here 2 is the index number where we want to changes and 1 is shows how many element we want to remove
//from index which e give frist (2) and "orange" is the element which we want to replace  where we select 
//the index number which we give frist.
//tostring
//let numB : Number[] = [1,2,3,4,5,6]
//console.log(numB);//output [1 ,2 ,3 ,4 ,5 ,6 ]
//console.log(numB.toString());//output 1,2,3,4,5,6
// let friend : string[] = ["kashaf","zarqa","nimra"]
// console.log(friend.toString());
