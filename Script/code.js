let Answer = document.getElementById("Output")
let Display = document.getElementById("Age")

function AgeConverter() {
let UserInputAge = document.getElementById("UserInputAge").value
Display.style.display = "block"

Answer.innerHTML = UserInputAge * 365;



}