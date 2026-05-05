//constraint : give strict rule

type Student={
   id:number,
   name:string,
   class:string,
}

const addStudentToCourse=<T extends Student>(studentInfo:T)=>{
   return{
      course:'Next Level',
      ...studentInfo
   }
}
const student1={
   id:123,
   name:'salman',
   class:"1",
   hasPen:true
};
const student2={
   id:123,
   name:'hossen',
   class:'1',
   hasCar:true,
   isMarried:true
}

const student3={
   hasWatch:true
}

const result1=addStudentToCourse(student1);
console.log(result1);

const result2=addStudentToCourse(student2);
console.log(result2);

const result3=addStudentToCourse(student3)//wrong reason rules given
