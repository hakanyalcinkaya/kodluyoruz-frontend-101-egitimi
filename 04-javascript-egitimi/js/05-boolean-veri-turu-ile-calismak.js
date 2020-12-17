// ********** Boolean Veri Turu ile Calismak ********** 

// 0 ve 1'i Anlamak ->
let isActive = false // 0
isActive = true // 1
console.log(isActive)


let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

userName = "user"

console.log("User Name:", Boolean(userName))

// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean(0) //  false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
Boolean(userName.length > 0) // true