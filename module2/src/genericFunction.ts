

// const createArrayWithString=(value:string)=>[value];

// const createArrayWithGeneric=(value:number)=>[value];

// const createArrayWithUserObj=(value:{id:number,name:string})=>{
//    return [value]
// }

// const arrString=createArrayWithString('apple');
// const arrNumber=createArrayWithNumber(222);
// const arrObj=createArrayWithUserObj({
//    id:234,
//    name:'Next level'
// });

const createArrayWithGeneric=<T>(value:T) =>{
   return [value]
}

const arrString=createArrayWithGeneric('apple');
const arrNumber=createArrayWithGeneric(222);
const arrObj=createArrayWithGeneric({
   id:234,
   name:'Next level'
});

//tuple
const createArrayWithTuple=(param1:string,param2:string)=>[
   param1,
   param2
];

const createArrayTupleWithGeneric=<X,Y>(param1:X,param2:Y)=>[
   param1,
   param2
]
const res1=createArrayTupleWithGeneric('salman',false);
const res2=createArrayTupleWithGeneric(222,{name:'mezba'});


const addStudentToCourse=<T>(studentInfo:T)=>{
   return{
      course:'Next Level',
      ...studentInfo
   }
}



const student1={
   id:123,
   name:'salman',
   hasPen:true
};
const student2={
   id:123,
   name:'hossen',
   hasCar:true,
   isMarried:true
}

const result1=addStudentToCourse(student1);
console.log(result1);

const result2=addStudentToCourse(student2);
console.log(result2);
