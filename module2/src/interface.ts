
// type alias
type User ={
   name:string;
   age:number;
};

type Role={
   role:'admin'|'user'
}

type UserWithRole=User & Role;

const user1:User={
   name:"Mr. X",
   age:100,
}

const user2:UserWithRole={
   name:"Mr. Y",
   age:200,
   role:'admin'
}

//interface only object type : array, object and function

interface IUser{
   name:string,
   age:number
}

interface IUserWithRole extends IUser{
   role:'admin'|'user'
}

const user3:IUserWithRole={
   name:"Mr. Y",
   age:200,
   role:'admin'
}


//function 
type Add=(num1: number, num2:number)=>number;
const add:Add=(num1,num2)=>num1+num2;

interface IAdd{
   (num1:number, num2:number):number
}
const add1:IAdd=(num1,num2)=>num1+num2;



type Friends=string[];
const friends:Friends=['a','b','c','d']

interface IFriends{
   [index: number]:string //indexing feature
}

const friends1:IFriends=['a','b','c','d']
