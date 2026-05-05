
//mapped types


//map

const arrayOfNum: number[] =[1,4,6];
const arrayOfString: string[]=['1',"2","4"];

const arrayOfStringUsingMap : string[] = 
arrayOfNum.map((num)=>num.toString());

console.log(arrayOfStringUsingMap);


type AreaOfNumber={
   height: number;
   width:number;
}

type height = AreaOfNumber["height"];

// type AreaOfString = {
//    height:string;
//    width:string;
// };


type AreaOfString={
   [key in "height" | "width"]:string
}

type Area<T> = {
   [key in keyof T] : T[key];
}

const area1 : Area<{height:string; width:number}> ={
   height:'50',
   width:40,
}



