//access >> modify


class BankAccount {
   public readonly userId : number;
   public userName:string;
   private userBalance:number;

   constructor(userId:number,userName:string, userBalance:number){
      this.userId=userId;
      this.userName=userName;
      this.userBalance=userBalance;
   }

   // addBalance(balance : number){
   //    this.userBalance = this.userBalance + balance;
   // }


   // getBalance(){
   //    return this.addBalance;
   // }

   set addBalance(amount: number){
      this.userBalance=this.userBalance+amount;
   }

   get getBalance(){
      return this.userBalance;
   }

}


class StudentBankAccount extends BankAccount{
   test(){
      
   }
}

const myAccount = new BankAccount(111, "Salman",10);
// myAccount.addBalance(100);
// myAccount.addBalance(200)
// console.log(myAccount);
// console.log(myAccount.getBalance);

myAccount.addBalance = 100;
myAccount.addBalance = 200;
//console.log(myAccount);
console.log(myAccount.getBalance);


