
//function : arrow and normal function


function add(num1:number,num2:number):number{
   return num1+num2;
}

console.log(add(2,4));

const sum=(num1:number,num2:number)=>num1+num2;
console.log(sum(5,5));

// object =>function ? method.

const poorUser={
   name:'salman',
   balance:0,
   addBalance(value:number){
      return this.balance+value
   }
}


//callback function

const arr:number[]=[1,4,6];
const sqrArray=arr.map((elm:number):number=>elm*elm);
console.log(sqrArray);
