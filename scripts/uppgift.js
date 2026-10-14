const student = {
    name: "Lisa",
    age: 19,
    hasTicket: true,
    hasParent: false,
    isVip: true
}

const guestList = [
    {
        name: "Lisa",
        age: 19,
        hasTicket: false,
        hasParent: false,
        isVip: false,
        courses: ["javascript 1", "html/css", "versionshantering", "ux"]
    },
    {
        name: "Omar",
        age: 17,
        hasTicket: true,
        hasParent: true,
        isVip: false,
        courses: ["html/css", "versionshantering"]

    },
    {
        name: "Elsa",
        age: 22,
        hasTicket: false,
        hasParent: false,
        isVip: false,
        courses: ["javascript 1", "html/css", "versionshantering", "sql"]
    },
    {
        name: "Karl",
        age: 16,
        hasTicket: false,
        hasParent: true,
        isVip: true,
        courses: ["javascript 1", "html/css"]
    },
]

console.log(guestList[0])
console.log(guestList[3])
console.log(guestList.length)

console.log(guestList[0].name)

const guest = guestList[0]

console.log("⭐️ Gäst", guest)

// < > >= <= && ||

if (
    (guest.age >= 18 && guest.hasTicket) ||
    (guest.age < 18 && guest.hasParent) ||
    guest.isVip
) {
    console.log(guest.name, "får komma in ✅")
} else {
    console.log(guest.name, "får inte komma in 🛑")
}

console.log(guest.name, "läser kurs:", guest.courses[2])

//loopar for-loop
// Var försiktig du kan hamna i en infinit loop 🔁

for (let i = 0; i < 5; i++) {
    console.log("Hej från loopen!")
    console.log(i)
}

for (let i = 0; i < guestList.length; i++) {
    console.log("---------------")
    console.log("Student:")
    console.log(guestList[i].name)

    if (guestList[i].hasTicket) {
        console.log("🎫 Studenten har en biljett")
    } else {
        console.log("🛑 Studenten har en inte biljett")
    }
}