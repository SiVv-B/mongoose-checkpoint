const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 9000
const User = require('./models/User')
const url =
  'mongodb+srv://siwarblk:gomycode123!@cluster0.3fzcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url, () => {
  console.log('Data Base: connected')
})
app.listen(port, () => {
  console.log(`the servere is running on ${port}`)
})

//Create and Save a Record of a Model:

const userOne = new User({
  name: 'siwar',
  age: 30,
  favouriteFood: ['Borritos', 'Pizza', 'Hamburger'],
})

/* userOne
  .save()
  .then((data) => {
    console.log('userOne is saved' + data)
  })
  .catch((error) => {
    console.log(error)
  })
 */
//Create Many Records with model.create()
const arrayOfUsers = [
  { name: 'Jhon', age: 28, favouriteFood: ['tacos', 'pizza'] },
  { name: 'Jane', age: 33, favouriteFood: ['Humberger'] },
  { name: 'Ali', age: 50, favouriteFood: ['salade', 'pasta','burritos'] },
  { name: 'Samia', age: 35, favouriteFood: ['Humberger', 'pasta','burritos'] },
  { name: 'Alex', age: 19, favouriteFood: ['Humberger', 'pizza','burritos'] },
]

/*   User.create(arrayOfUsers)
  .then(() => {
    console.log("the users are saved in the DB")
  })
  .catch((error) => {
    console.log(error)
  })   
  */
//-----------------------------------------------
//Use model.find() to Search Your Database
/*   User.find()
  .then((data) => {
    console.log('the founded users from the DB' + data)
  })
  .catch((error) => {
    console.log(error)
  })  */ 

//-----------------------------------------------
//Use model.findOne() to Return a Single Matching Document from Your Database
/*   User.findOne({ name: "Jane" })
  .then((data) => {
    console.log("here is the user you are looking for: " + data)
  })
  .catch((error) => {
    console.log(error);
  }) */

//-----------------------------------------------
//Use model.findById() to Search Your Database By _id
/*   User.findById({ _id: "61a8f63cefac25053cee2851" })
  .then((data) => {
    console.log("the found user by ID:" + data)
  })
  .catch((error) => {
    console.log(error)
  }) */

//-----------------------------------------------
//Perform Classic Updates by Running Find, Edit, then Save
/*   User.findOneAndUpdate(
    { name: "Jhon" },
    { name: "Alex", age: 10},
    {
      new: true,
      upsert: true,
    }
  ).then((data) => {
    console.log("the user Jhon is replaced by Alex"+ data)
  }) */

//-----------------------------------------------
//Perform New Updates on a Document Using model.findOneAndUpdate()
/* User.findOneAndUpdate(
    { name: "Ali" },
    { name: "Samia", age: 33},
    {
      new: true,
      upsert: true,
    })
    .then((data) => {
      console.log("the user Ali is replaced by Samia"+ data)
    }) */

//-----------------------------------------------
//Delete One Document Using model.findByIdAndRemove
/*   User.findByIdAndRemove({_id:'61a8fb0abee61f2c9e93c868'})
  .then(()=>{ 
    console.log('the user Ali has been removed')
  })
  .catch((error)=>{
    console.log()
  }) */

//-----------------------------------------------
//MongoDB and Mongoose - Delete Many Documents with model.remove()
/* User.remove().then(()=>{
  console.log('All the users have been removed')
}) */

//-----------------------------------------------
//Chain Search Query Helpers to Narrow Search Results


//Find people who like burrito:
/* User.find({favouriteFood:{$all:['burritos']}})
.exec((err,data)=>{
 if (!err){
   console.log('people who like burrito are:' + data)
 }}) */

 //---------------------------
//sort people who like burritos by name
/* User.find({favouriteFood:{$all:['burritos']}})
.sort({name: 1})
.exec((err,data)=>{
 if (!err){
   console.log('people who like burrito sorted by name:' + data)
 }}) */

  //---------------------------
//sort people who like burritos by name and limit the result to two
/* User.find({favouriteFood:{$all:['burritos']}})
.sort({name: 1})
.limit(2)
.exec((err,data)=>{
 if (!err){
   console.log('2 people who like burrito sorted by name:' + data)
 }}) */

   //---------------------------
//sort people who like burritos by name and limit the result to two
//and selcted by name
 User.find({favouriteFood:{$all:['burritos']}})
.sort({name: 1})
.limit(2)
.select('name')
.exec((err,data)=>{
 if (!err){
   console.log('2 people who like burrito sorted by name:' + data)
 }}) 

