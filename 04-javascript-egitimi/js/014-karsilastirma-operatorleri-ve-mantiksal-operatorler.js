// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********
// https://www.w3schools.com/js/js_comparisons.asp

let price = "0"
let user = "hakan"

// == Eşitse
console.log("== :", price == 1 )
console.log("== :", price == 100 )

// === Hem değeri hem de türü eşitse
console.log("=== :", price === 1 )
console.log("=== :", price === 100 )

// != Eşit değilse
console.log(user != "guest" )

// < Küçükse
console.log("price < 100", price < 100)

// <= Küçük veya eşitse
console.log("price <= 100", price <= 100)

// > Büyükse
console.log("price > 200", price > 200)

// >= Büyük veya eşitse
console.log("price >= 100", price >= 100)


// && ve
price = 0
console.log( price > 0 && user != "guest" )

// || veya
console.log( price > 0 || user != "guest" )

// ! degil (tersi)
user = "guest"
price = 1
console.log( price > 0 && !user == "guest" )