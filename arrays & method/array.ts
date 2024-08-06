//ARRYS
// using type[] syntax:

// let friends: string[] = ["nimra" ,"hina","zarqa","maryum","emaan"];
// console.log(friends);

// //using array<type> syntax

// let color :Array<string> = ["blue","pink", "purple", "black"];
// console.log(color);

// //Accessing array element

// let colorpicker : string[] = ["blue","pink", "purple", "black"];
// console.log( colorpicker[0]) ;
// console.log( colorpicker[1]) ;
// console.log( colorpicker[2]) ;

// //array method

// // 1- adding element 

// //push : push add element in end of the array 

// let counting : number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
// counting.push(10);
// console.log(counting);

// // unshift : add the element in the first of the array 

// let list : Array<string> = [ "bread", "oil" , "wheat" , "rice" , "milk" ,"butter", "soap" , "shampoo"]
// list.unshift("sugar");
// console.log(list);

// // 2- removing element

// // pop : remove the element in the end of array

// let fullname : Array<string> = ["kashaf naz" , "nimra" , "zarqa" ,"maryum"]
// fullname.pop();
// console.log(fullname);

// //shift : remove the element from the first  of  the array

// let lastname : Array<string> = ["kashaf naz" , "nimra" , "zarqa" ,"maryum"]
// lastname.shift();
// console.log(lastname);

// //other common Method

// //1- map
// let Numbers : number[] = [1, 2, 3, 4, 5];
// let changing = Numbers.map( n => n * 2);
// console.log(changing);


// let  numbe : Array<number> = [1, 2, 3, 4, 5];
// let change = numbe.map(n=> n + 4);
// console.log(change);

// let listed : Array<String> = ["bread", "oil" , "wheat" , "rice" , "milk" ,"butter", "soap" , "shampoo"];
// let quantity = listed.map(n => n + "  " + "2 pack");
// console.log(quantity);



// interface A {
//     name: string;
//     age : number;
// }
// let people: A[] = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 }
// ];

// let names = people.map(person => person.name);
// console.log(names);


// interface Shoping {
//     dresses: string;
//     slipers : string;
// } 
// let shoping : Shoping[]=[
//     {dresses: "pink",slipers : "white"},
//     {dresses: "yellow",slipers : "black"},
//     {dresses: "black",slipers : "red"},
// ]

// let dresses = shoping.map(color => color.dresses);
// console.log(dresses);

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