
//type guard

//in typeof

type AlphaNumeric = number | string;

const add = (num1:AlphaNumeric, num2:AlphaNumeric)=> {
   
   if(typeof num1==="number" && typeof num2==="number"){
      return num1+num2
   }else{
      return num1.toString()+num2.toString();
   }
}

console.log(add(2,2));//4
console.log(add("2",2));//22

//in guard
type NormalUser = {
   name:string;
}

type AdminUser={
   name:string;
   role:"Admin"
}

const getUserInfo = (user: NormalUser | AdminUser)=>{

   if('role' in  user){
      console.log(`This ${user.name} and his role is : ${user.role}`);
   
   }else{
      console.log(`This ${user.name}`);
   }
   
}
getUserInfo({name: "Normal"})

