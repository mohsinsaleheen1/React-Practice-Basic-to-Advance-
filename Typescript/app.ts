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

// console.log(teacher.name);
// console.log(teacher["experience"]);


// // Type Declaration
// let student : {
//     name: string,
//     age: number
// }

// student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// anonymous

// let teacher : {name: string, exp: number} = {
//     name: "Zeeshan",
//     exp: 10
// }

// Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }

// let student: Student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// // Interfaces

// interface Manager {
//     name: string,
//     subordiates?: number
// }

// let storeManager: Manager = {
//     name: "Bilal"
// }
// interface Student {
//     student_id: number;
//     name: string;
//   }
    
// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }
    
// type intersected_type = Student & Teacher;
    
// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };
    
// console.log(obj1.teacher_Id);
// console.log(obj1.teacher_name);