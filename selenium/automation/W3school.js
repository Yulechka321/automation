
// // function myFunction(name){
// // 	return ("Hello" + name)
// // }

// // console.log(myFunction("Max"))



// // // "Hello Max"


// // Write a function named tellFortune that:
// // takes 4 arguments: number of children, partner's name, geographic location, job title.
// // outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// // Call that function 3 times with 3 different values for the arguments.


// var personA= [{
// 	"job":"QA",
// 	"location":"Belarus",
// 	"name":"Peter",
// 	"children":"2"
// 	},

// {
// 	"job":"BA",
// 	"location":"London",
// 	"name":"John",
// 	"children":"5"
// 	},

// 	{
// 	"job":"Dev",
// 	"location":"USA",
// 	"name":"Alina",
// 	"children":"2"
// 	}
// 	]

// for(var i=0; i<personA.length; i++)
// {
// 	console.log(tellFortune(personA[i]["job"], personA[i]["location"], personA[i]["name"], personA[i]["children"]))
// }


	
// function tellFortune(job,location,name,children)
// {
// 	return ("You will be a " + job + " in " +location + ", and married to " + name + " with " + children + " kids. ")
// }
// // console.log(tellFortune(1,2,3,4))
// // console.log(tellFortune(1,2,3,4))
// // console.log(tellFortune(1,2,3,4))


//Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.



// function calculateage(birth){
// 	var date= new Date().getFullYear()
// 	var a = date - birth
// 	return [a,a-1]
// }

// var x=calculateage(1986)
// console.log("You are either " + x[0] + " or " + x[1])

// var x=calculateage(1988)
// console.log("You are either " + x[0] + " or " + x[1])


// var x=calculateage(1977)
// console.log("You are either " + x[0] + " or " + x[1])



// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


// function calculateSupply(age, amountperday){

// 	var maxAge=80
// 	var left=(maxAge-age)*365

// 	return amountperday*left

// }

// console.log(calculateSupply(31,2))calcCircumfrence()={

// }
// console.log(calculateSupply(42,1))
// console.log(calculateSupply(15,3))

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".



// function calcCircumfrence(radius){
// 	var circumference=radius*2*Math.PI
// 	return circumference

// }

// console.log("The circumference is "+ calcCircumfrence(3))

// function calcArea(radius){
// 	var area=Math.PI*radius*radius
// 	return area
// }
// console.log("The area is "+ calcArea(3))


// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."



function celsiusToFahrenheit(celsius){
	return celsius*1.8+32
}
var C=30
var F=celsiusToFahrenheit(C)
console.log(C+" C "+" is "+celsiusToFahrenheit(C)+" F ")

// console.log(F)


function fahrenheitToCelsius(F){
	return (F-32)*5/9
	}
var C=(F-32)*5/9
var F=50
console.log(F+" F "+" is "+fahrenheitToCelsius(F)+" C ")