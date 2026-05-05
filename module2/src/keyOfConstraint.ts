
//keyOf : Type operator

type RichPeopleVehicle={
   car:string,
   bike:string,
   cng:string,
};

type MyVehicle="bike"|"car"|"cng";
type MyVehicle2=keyof RichPeopleVehicle;

const myVehicle: MyVehicle2="bike"

type User={
   id:number;
   name:string;
   address:{
      city:string
   }
}

const user : User ={
   id:222,
   name:'salman',
   address:{
      city:"dhaka",
   }

};

//const myId=user.id;
// const myId =user["id"];
// const myName= user['name'];
// const myAddress=user['address'];
//console.log(myId, myName, myAddress);


// const getPropertyFormObj = (obj: User, key:"id"|"name"|"address")=>{
//    return obj[key]
// }
const getPropertyFormObj = <X> (obj: X, key : keyof X)=>{
   return obj[key]
}
// const result=getPropertyFormObj(user,"name");
// console.log(result);

const product={
   brand:"Hp"
}

const student={
   id:123,
   class:"four"
}

const result2 = getPropertyFormObj(product,"brand");
const result3 = getPropertyFormObj(student,"id");