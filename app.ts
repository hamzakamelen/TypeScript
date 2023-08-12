//----------------1.Restriction  --------------------------

let a = 5;
a = 'hamza' //error bcz type already declared through assigning
a = 6; // Not giving error

let b = 'Hamza';
b = 6; //error bcz type already declared through assigning
b = 'HAMZA' // Not giving error

let c = true;
c = 535 //error bcz type already declared through assigning
c = false; // Not giving error

let arr = [5,6,4,6]
arr.push("ABC") //error bcz type already declared through assigning
arr.push(123); // Not giving error


let Arr = ["abc",5,6,4,6]
Arr.push("ABC"); //Not giving error
Arr.push(123); // Not giving error
Arr.push(true); //error bcz type already declared through assigning


let ARR = ["abc",true,123]
ARR.push("Abcccc") // Not giving error
ARR.push(false) // Not giving error
ARR.push(123) // Not giving error



let abc;
abc = 123; //Not giving error
abc = true; //Not giving error
abc = "HAMZA" //Not giving error
abc = [] //Not giving error
abc = {}  //Not giving error



let obj ={
    name:"HAMZA",
    id:123
}
obj.id = 'HAMZA' //ERROR 
obj.name = "Hamza" //// Not giving error
obj.class = "Intermediate" // Doesn't Exist Error bcz we can't add new

//----------------2.Types-----------------------------

let A:string = "ABC";
A = 123; //error bcz type assigned
A = "HAMZA" // Not giving error

let B:number = 123;
B = 'Hamza'; //Error
B = 123456; // Not giving error

let C:boolean = true;
C = 'Hamza'; // Error
C = false; // Not giving error\

let D:any = "AbC"
D = true; // Not giving error
D = 123; // Not giving error

let ABCD:number[] = [12,2,3]
let ABCDE:string[] = ["12","2","A"]
let ABCDEF:boolean[] = [true,false]
let ABCDEFG:any[] = ["12","2","A",1,2,3,true]
let ABCDEFGH:(string | number)[] = ["12","2","A",1,2,3] // for OR we use | not ||
// ---------------------------------------------
let objtype :{
    name: string,
    id: number
}={
    name:"Hamza",
    id:122
}

// ---------------------------------------------
let objType :{
    name: string,
    id: number
}
objType ={
    name:"Hamza",
    id:122
}

// ---------------------------------------------
type ObjecTYpe = {
    id: number,
    name: string,
    isAdmin : boolean
}
let user:ObjecTYpe={
    id:1,
    name:'Hamza',
    isAdmin:true
}

// ---------------------------------------------
let Types : {
    name:string,
    id:number,
    isAdmin:boolean
}[]=[
    {
        id:123,
        name:'Hamza',
        isAdmin:true   
    }
]

// ---------------------------------------------
let usEr:ObjecTYpe[]=[
    {
        id:123,
        name:'Hamza',
        isAdmin:true
}
]

// ---------------------------------------------
let USER:ObjecTYpe[]=[
    {
        id:123,
        name:'Hamza',
        isAdmin:true
},{
    id:1234,
    name:'Talha',
    isAdmin:true
},{
    id:1235,
    name:'Anas',
    isAdmin:true
}
]

// ---------------------------------------------
type config = {
    id:number,
    name:string,
    theme: "dark" | "light"
} 

let obj:config = {
    id:1,
    name:'abc',
    theme:"light"
}

// ---------------------------------------------
interface User {
    id:number,
    name:string,
    rollNo: string,
    Contact?:string //Optional
}

let OBject:User = {
    id:1,
    name:"Hamza",
    rollNo: "22F-BSAI-09"
}

// ---------------------------------------------
interface Users {
    id:number,
    name:string,
    rollNo: string,
    Contact?:string //Optional
}
interface Employee extends Users {
    EmployeeID: number,
    companyName: string,
    joiningdate: Date //Date DataType
}

let object:Employee = {
    EmployeeID:123456,
    companyName:'Abc',
    id : 12,
    name:'Hamza',
    rollNo: 'Hamza',
    joiningdate: new Date();
}


// ---------------------------------------------
interface Userss <T> {
    id:number,
    name:string,
    rollNo: string,
    Contact?:string, //Optional
    extras: T[]
}

let Emp:Userss <number> ={
    id:1,
    name:"Hamza",
    rollNo: "22F",
    Contact?:"03112474407", //Optional
    extras: [1,2,3,4,5,6,7,8]
}

// ---------------------------------------------
interface UserSS <T> {
    id:number,
    name:string,
    UserData: T[]
}
type user ={
    Appname:string,
    Appid:number
}
let Data:UserSS <user> ={
    id:12345,
    name:"Hamza",
    UserData: [
        {
            Appname:"Hamza",
            Appid:123 
        }
    ]
}