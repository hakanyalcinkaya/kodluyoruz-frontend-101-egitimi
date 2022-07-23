// String Veri Turu Islemleri
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let mail = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

// string karakter sayisi -> length
console.log(
    "firs name uzunluk: ", firstName.length
)
// ılk karakteri bulmak -> [0]

console.log(
    "first name birinci karakter: ", firstName[0] // 1. yontem
)

console.log(
    "first name birinci karakter: ", firstName.charAt(0)
)

// buyuk harf / kucuk harf 
console.log(
    "first name once: ", firstName , "first name sonra: ", firstName.toUpperCase()
)

console.log(
    "last name once: ", lastName , "last name sonra: ", lastName.toLowerCase()
)

// string icinde istedigimiz bilgiyi aramak ve yerini bulmak -> search  && bellir bir yere kadar al -> slice

console.log(
    mail.search("@")
)

mail.search("olmayan") // yok ise -1 , var ise yerini gosterir.

let DOMAIN = mail.slice(mail.search("@") + 1 )
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0,DOMAIN.indexOf("."))
) // gmail kismini aldik

// bilgiyi degistir -> replace
mail = mail.replace("gmail.com","hotmail.com") // gmail.com  -> hotmail.com ile degistirdik
console.log(mail)

// istedigim bilgi var mi ? -> includes
console.log(mail.includes("hotmail.com")) // var ise true yok ise false doner


// istdigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth
console.log(mail.endsWith("hotmail.com")) // basladi veya bittiyse true, degil ile false doner


// ilk harflerini buyuk yapmak
let fullname = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullname)
