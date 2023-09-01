let count = 0
let passengers = 0
let amount = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let amountEl = document.getElementById("amount-el")

function increment() {
    count+=1
    console.log(count)
    document.getElementById("count-el").innerText = count
}


function save(){
    passengers += count
    amount += count
    saveEl.textContent += (passengers + " - ")
    amountEl.innerText = ("Passenger Entries: " + amount)

    passengers = 0
    count = 0
    countEl.innerText = count + passengers
}

function reset(){
    amount = 0
    saveEl.innerText = ""
    amountEl.innerText = ("Passenger Entries: 0")
}

// Create a variable, messageToUser, that contains the message we have logged

let username = "User 👋"
let message = "You have tree new notifications"

let messageToUser = message + ", " + username + "!"
console.log(messageToUser)