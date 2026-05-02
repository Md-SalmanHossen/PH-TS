let bazarList:string[]=["egg","milk","sugar"];
bazarList.push("potato")

let mixedArray : (string | number)[]=["egg",12,"milk",1,"sugar",5,];
mixedArray.push(12);
mixedArray(true)//bool not accept only num or str

//use fixed length
let coordiate :[number,number]=[20,30,]

let couple:[string,string]=["husband","wife"];

let numAndRoll:[string,number]=["Salman",223]

//reference type : object

// const user :{
//    organization:"PH",//value as a type ,it called literal type
//    firstName:string,
//    middleName?:string,//optional type
//    lastName:string
// }={
//    firstName:'Salman',
//    lastName:'Hossen',
// } 
const user :{
   readonly organization:string,//access modifier
   firstName:string,
   middleName?:string,//optional type
   lastName:string
}={
   organization:"PH",
   firstName:'Salman',
   lastName:'Hossen',
}


