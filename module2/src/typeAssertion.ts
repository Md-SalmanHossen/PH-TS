
let anything :any;

// anything=222;
// (anything as number)

anything='salman';
// (anything as string)

const kgToGmConverter=(input:string |number |undefined)=>{
   if(typeof input==='number') return input*1000;
   else if(typeof input==='string'){
      const [value]=input.split(" ");
      return `Converted output is ${Number(value)*1000}`
   }
}

const result=kgToGmConverter(2) as number;
console.log(result);

const result2=kgToGmConverter('2 kg') as string;
console.log(result2);


type customError={
   message:string,
}
try {
   
} catch (error) {
   console.log((error as customError).message);
   
}
