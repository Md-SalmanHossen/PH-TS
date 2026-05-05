

interface Developer <T, X=null>{
   name:string;
   salary:number;
   device:{
      brand:string;
      model:string;
      releasedYear:string;
   },
   smartWatch:T;
   bike?:X;
}

interface BrandWithoutWatch{
   heartRate:string;
   stopwatch:boolean;
}

const poorDeveloper : Developer<BrandWithoutWatch,{
   brand:'Yamaha',
   engineCapacity:'200cc'
}> ={
   name:'Mr. Poor',
   salary:20,
   device:{
      brand:'lenovo',
      model:'A21',
      releasedYear:'2010'
   },
   smartWatch:{
      heartRate:'160',
      stopwatch:true,
   }
}


interface AppleWatch{
   heartRate:string;
   stopwatch:boolean;
   callSupport:boolean;
   aiFeature:boolean;
   calculator:boolean;
}

const richDeveloper : Developer<AppleWatch> ={
   name:'Mr. Rich',
   salary:100,
   device:{
      brand:'Hp',
      model:'X34',
      releasedYear:'2026'
   },
   smartWatch:{
      heartRate:'160',
      stopwatch:true,
      callSupport:true,
      aiFeature:true,
      calculator:true
   },
   bike:null
}

const add =(num1:number,num2:number=0)=>
   num1+num2;
console.log(add(2));
