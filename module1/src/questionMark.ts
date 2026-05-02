// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining

const userAge=21;

const biyearJonnoELigible=(age:number)=>{
   // if(age>21) console.log("eligible");
   // else console.log("not eligible");   

   const result = age>=21?'eligible':'not eligible'
   console.log(result);
   
}

biyearJonnoELigible(21)

//const userTheme= undefined;
const userTheme= "";
const selectedTheme= userTheme ?? 'light theme';
console.log(selectedTheme);

// optional chaining 
const user:{
   address:{
      city:string;
      town:string;
      postal_code?:string;
   }
}={
   address:{
      city:"dhaka",
      town:"banani"
   }
}

const postal_code=user.address.postal_code;
console.log(postal_code)

