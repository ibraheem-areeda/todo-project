'use strict'
 
var userName = prompt("what is your name ?")
console.log(userName)

var gender = prompt('if your are female enter "female" , if you are male enter "male" ')

var age = prompt("how old are you ?")

if (age<=0){alert("please enter your age correctly!")}

var skipWelcomeMsg = confirm("if you want to skip the welcoming message press cancel ")

if(skipWelcomeMsg==true){
if(gender=="male"){alert("welcome Mr." + userName)}
else if(gender=="female"){alert("welcom Ms. " + userName)}
else(alert(userName))
}
else(console.log("did not want the welcoming message"))

