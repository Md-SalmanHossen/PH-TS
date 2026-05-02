
//union = '|'

type userRole='admin'|'user';

const getDashboard=(role:userRole)=>{
   if(role==='admin') return 'Admin Dashboard'
   else if(role==='user') return 'User Dashboard'
   else return "guest dashboard"
}

getDashboard('guest');


//intersection = '&'
type Employee={
   id:string;
   name:string;
   phone:string;
}

type Manager={
   designation:string;
   teamSize:number;
}

type EmployeeManager=Employee & Manager

const chowdhuryShaheb: EmployeeManager={
   name:'Chodhury Shaheb',
   id:'123',
   phone:'1234456',
   designation:'manager',
   teamSize:20
}
console.log(chowdhuryShaheb);
