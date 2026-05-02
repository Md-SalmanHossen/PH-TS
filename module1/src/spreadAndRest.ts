
//spread operator

const friends = ['rana', 'raju'];

const schoolFriends = ["alu", "vorta", "montu"];

const collegeFriends = ['jhantu', 'babu'];

friends.push(...schoolFriends);
friends.push(...collegeFriends)
console.log(friends);



const user = { name: 'salman', phone: '017000000' };
const otherInfo = { hubby: 'traveling', favoriteColor: 'black' };

const userInfo = { ...user, ...otherInfo }
console.log(userInfo);


//res operator

// const sendInvite =(friend1:string, friend2:string, friend3:string)=>{
//     console.log(`Sent Invitation to ${friend1}`);
//    console.log(`Sent Invitation to ${friend2}`);
//    console.log(`Sent Invitation to ${friend3}`);   
// }

const sendInvite=(...friends: string[]) => {
   friends.forEach((friends: string) =>
      console.log(`Sent Invitation to ${friends}`
      )
   )
}

sendInvite('a', 'b', 'c');