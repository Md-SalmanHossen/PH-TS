
const user = {
   id:1234,
   name:{
      fname:"salman",
      lname:"hossen"
   },
   gender:'male',
   favoriteColor:'black'
}

//const myFavoriteColor=user.favoriteColor
//const myLastName=user.name.lname


const {favoriteColor:myFavoriteColor, name :{fname}}=user;
console.log(myFavoriteColor);
console.log(fname);


const friend=['a','b','c','d'];
const [,myBestFriend,y]=friend;
console.log(myBestFriend);


