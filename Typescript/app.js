"use strict";
// const name :string = "Mohsin";
// console.log(name)
// lett name : string = "Ali";
// console.log(name)
// let message:string = "Hello World";
// console.loger(message);
// let message = "Hello World";
// message = 6;
// console.log(message);
// *******
//strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true;
// *******
//type inference
// let e = "USA";
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;
// *******
// Union Literals
// let myname: string | null;
// myname = null;
// console.log(myname);
// myname = "zia";
// console.log(myname);
// myname = undefined; //Error
// myname = 12; //Error
// let myAge: string | number;
// myAge = 16;//narrowing
// console.log(myAge);
// myAge = "Dont Know";//narrowing
// console.log(myAge);
// ********
// Objects
// let teacher = {
//     name: "Zeeshan",
//     experience: "10"
// }
Object.defineProperty(exports, "__esModule", { value: true });
let obj1 = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
console.log(obj1.teacher_Id);
console.log(obj1.teacher_name);
