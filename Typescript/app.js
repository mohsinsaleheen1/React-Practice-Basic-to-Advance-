// var a:number = 20;
// var b:number = 30;
// var result:number = a+b;
// console.log(result)
// ************Boolean******************
// let isActive:boolean = true;
// let hasPermission = false;
// console.log(isActive);
// console.log(hasPermission)
// ************Number******************
// let decimal: number = 6;
// let hex: number = 0xf00d;       // Hexadecimal
// let binary: number = 0b1010;     // Binary
// let octal: number = 0o744;      // Octal
// let float: number = 3.14; 
// console.log(decimal);
// console.log(hex);
// console.log(binary);
// console.log(octal);
// console.log(float);
// ************String******************
// let fname: string = "Mohsin";
// let lname: string = "Saleheen";
// let age : number = 21;
// let sentence : string = `My name is ${fname} ${lname} and I am ${age} years old`
// console.log(sentence)
// ************Functions******************
// function greet(name:string): string {
// return `hello ${name}`
// }
// console.log(greet("Mohsin"));
// console.log(greet(34));
// TypeScript infers 'string'
// let username = "Hassan";
// // TypeScript infers 'number'
// let score = 100;
// // TypeScript infers 'boolean[]'
// let flags = [true, false, true];
// // TypeScript infers return type as 'number'
// function add(a: number, b: number) {
//   return a + b;
// }
// // Log the values to see them in the output
// console.log(username);
// console.log(score);
// console.log(flags);
// console.log(add(5, 3));
// let score = 100;  // TypeScript infers 'number'
// score = "high"; 
// console.log(score);
// const data = JSON.parse('{"name":"Mohsin","age":30}');
// console.log(data)
// let something;
// something = "Mohsin";
// something=20;
// console.log(something)
// ************Any******************
// let v: any = true;
// v = "String";
// console.log(Math.round(v))
var w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
