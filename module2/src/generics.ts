
// dynamically generalize : Generic


type GenericArray<T> = Array<T>


// const friends:string[]=['x','y','z'];
const friends:GenericArray<string> =['x','y','z'];


// const rollNumber:number[] =[4,6,8];
const rollNumber:GenericArray<number> =[4,6,8];

const isEligibleList:GenericArray<boolean> =[true,false,true];


const sqrFunction=(value:number)=>{
   return value*value
}
console.log(sqrFunction(8));

type Coordinates<X,Y> =[X,Y];
const coordinated: Coordinates<string,string> =["20","30"];
const coordinated2:Coordinates<number,number> =[20,30];


const userList:GenericArray<{name:string; age:number}> = [
   {
      name:"A",
      age:22,
   },
   {
      name:"b",
      age:25,
   },
]