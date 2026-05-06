

class Parent{
   name: string;
   age:number;
   address:string;

   constructor(name:string,age:number,address:string){
      this.name=name;
      this.age=age;
      this.address=address;
   }

   getSleep(numOfHours : number){
      console.log(` ${this.name} sleep regularly eto hours ${numOfHours}`);
   }
}

class Student extends Parent{

}

const student1= new Student('fakibaz',22,"dhaka");
student1.getSleep(15);


class Teacher extends Parent{
   designation:string;

   constructor(name:string,age:number,address:string,designation:string){
      super(name,age,address);
      this.designation=address;
   }


   takeClass(numOfClass:number,){
      console.log(`${this.name} class ney ${numOfClass} ghonta`);
   }

}

const teacher1=new Teacher("Mr. smart",22,"Dhaka","class teacher");
teacher1.takeClass(4);