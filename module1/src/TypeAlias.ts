type User ={
   id:number,
   name:{
      fname:string,
      lname:string,
   },
   gender:'male'|'female',
   contactNo:string,
   address:{
       division:string,
       city:string
   } 
}

const user1 :User={
   id:123,
   name:{
      fname:'a',
      lname:'b',
   },
   gender:'male',
   contactNo:'0177',
   address:{
      division:'rangpur',
      city:'ulipur'
   }
}

const user2 : User={
   id:123,
   name:{
      fname:'a',
      lname:'b',
   },
   gender:'male',
   contactNo:'019',
   address:{
      division:'rangpur',
      city:'ulipur'
   }
}
type AddFunction=(num1:number, num2:number)=>number;

const add:AddFunction=(num1,num2)=> num1+num2;