//access >> modify


class BankAccount {
   readonly userId : number;
   userName:string;
   protected userBalance:number;

   constructor(userId:number,userName:string, userBalance:number){
      this.userId=userId;
      this.userName=userName;
      this.userBalance=userBalance;
   }

   addBalance(balance : number){
      this.userBalance = this.userBalance + balance;
   }
}


class StudentBankAccount extends BankAccount{
   test(){
      
   }
}

const myAccount = new BankAccount(111, "Salman",10);
myAccount.addBalance(100);
myAccount.addBalance(200)
console.log(myAccount);
