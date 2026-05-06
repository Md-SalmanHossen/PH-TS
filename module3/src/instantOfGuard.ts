
class Person{
   name:string;

   constructor(name:string){
      this.name=name;
   }

   getSleep(numOfHours: number){
      console.log(`${this.name} per day ${numOfHours}hours sleep`);
      
   }
}


class Student extends Person{
   constructor(name:string){
      super(name);
   }

   doStudy(numOfHours:number){
      console.log(`${this.name} is studying regularly ${numOfHours}`);
      
   }

}

class Teacher extends Person{
   constructor(name:string){
      super(name);
   }
   
   takeClass(numOfHours:number){
      console.log(`${this.name} is taking class regularly ${numOfHours}`);
      
   }

}

//function guard

const isStudent = (user : Person)=>{
   return user instanceof Student;
}

const isTeacher = (user : Person)=>{
   return user instanceof Teacher;
}

const getUserInfo= (user: Person)=>{
   if(isStudent(user)){
     return user.doStudy(10);
   }else if(isTeacher(user)){
     return user.takeClass(5);
   }else{
      return user.getSleep(15);
   }
}

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. Teacher");
const person1 = new Person("Mr. Person")

getUserInfo(student1);
getUserInfo(person1);