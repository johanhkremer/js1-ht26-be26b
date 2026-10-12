/* Datatyper
Primitiva
string = text
number = siffror
boolean = true/false
null = inget värde, men valt
undefined = inget värde

Inte primitiva
object = { nyckel: värde }
array = [1,2,3], ["johan", "stina", "Lisa"], [42, "johan", false, null]
*/

console.log("👋 Hej från script.js!")

//Variabler (Som en låda för att spara data)
const user = "Johan"
let age = 45
const courseStarted = true
let student = null
const books = undefined

//user = "Olle"

//!Gammal syntax
var gammal = "Gammal syntax"

console.log("Jag heter", user, "och jag är", age, "år gammal")

console.log("user är typen:", typeof user)
console.log("age är typen:", typeof age)
console.log("courseStarted är typen:", typeof courseStarted)
console.log("students är typen:", typeof student)
console.log("books är typen:", typeof books)

console.log("student:", student)

student = {
    name: "Stina",
    age: 25,
    course: "Javascript 1",
    startedCourse: false
}

console.log("student:", student)

const studentsArray = ["johan", "stina", "ann", "mohammed"]

console.log(studentsArray[0])

const students = [
    {
        name: "johan",
        age: 45,
        course: "Javascript 1",
        startedCourse: true,
    },
    {
        name: "Stina",
        age: 25,
        course: "Javascript 1",
        startedCourse: false
    },
    {
        name: "ann",
        age: 32,
        course: "Javascript 1",
        startedCourse: false
    },
    {
        name: "mohammed",
        age: 35,
        course: "Javascript 1",
        startedCourse: true
    },
]


{
    //var är inte block-scope
    var x = 3
    const y = 12

    x = 7
}

const y = 15

console.log("🔥 var:", x)
console.log("🌊 const:", y)