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

alert ('please answer the following questions in "yes" or "no" ')

const userInput = (userInput) => {   
let developer = prompt("are you a developer ?")
let knowJavaScript = prompt("do you know java script ?")
let useful = prompt("is this website useful for you ? ") 

let userInputArray = [ developer , knowJavaScript , useful ]
return userInputArray
}

let inputNumber1 = userInput()




const checkFunction = (arr) => {
    
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] == null || arr[i] == undefined || arr[i] == "" ){ 
            arr[i] = "invalid"
        }
    }
    return arr
}


let inputNumber1Checked = checkFunction(inputNumber1)

console.log(inputNumber1Checked)

