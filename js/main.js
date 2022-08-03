// Add all your JS here

 let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
   
  saveEl.textContent += count + " - "
  
  count = 0
  countEl.textContent = count
}

let myPoints = 3

function add3Points() {
  myPoints += 3
}


function remove1Point() {
  myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)

let firstCard= 10

let secondCard= 10

let sum= firstCard + secondCard

if (sum <= 20) {
  console.log("Do you want to draw a new card 😊")
} else if (sum=== 21) {
  console.log("Wohoo, you've  a blackjack 🥳")
} else {
  console.log("you are out of the game 😭")
}

for (i= 10; i<= 100; i+= 10) {
  console.log(i)
}

let player1Time= 200
let player2Time= 500
player1Time + player2Time

function totalRaceTime() {
  return player1Time + player2Time
}

totalRaceTime =totalRaceTime()
console.log(totalRaceTime)

let castle ={
  body: 123,
  head: "My head is small but mighty",
  list: [1, 2 ,5, 7],
  price: 536
}
console.log(castle.head)
console.log(castle.list)

let person ={
  name: "Miracle",
  age: 23,
  country: "Nigeria"
}

function logData() {
  console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()

let age = getRandomValue()
 
 console.log(age)
function getRandomValue() {
  let ageNumber= Math.floor(Math.random()*100) + 1
  return ageNumber
}


if (age < 6) {
  console.log("Discount: free")
} else if (age >=6 && age <= 17){
  console.log("Discount: Child discount")
} else if (age >17 && age < 27) {
  console.log("Discount: Student discount")
} else if (age >= 27 && age < 67) {
  console.log("Discount: Full price")
} else {
  console.log("Discount: Senior citizen discount")
} 


let largestCountry= ["China", "India", "USA", "Indonesia", "Pakistan" ]

console.log("The 5 largest Country in the World:")
for (i=0; i< largestCountry.length; i++) {
  console.log("  - " + largestCountry[i])
}

let dayOfMonth= 13
let weekDays= "Friday"

if (weekDays=== "Friday" && dayOfMonth=== 13) {
  console.log("😱")
}

let hand= ["rock", "paper", "scissors"]

console.log(hand[Math.floor(Math.random()*3)])

//localStorage.setItem("myName", "Affun Miracle")

let pon= "i love to say that i am good to be the the best in my team"

console.log(pon.indexof("say"))

