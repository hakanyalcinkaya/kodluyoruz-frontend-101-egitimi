// Veri Turunu Ogrenmek ve Veri Turu Donusumleri


// veri turunu ogrenmek typeof

let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
"Price : " , typeof(price)
)

console.log(
    "String Price : " , typeof(stringPrice)
)

console.log(
    "Has Password : " , typeof(hasPassword)
)


// string(metinsel) bilgileri int ve floata donusturmek

let number = "11"

console.log(
    "number1 : ", parseInt(number)
)

let number2 = "11px"  // 11px -> parseInt(number2) -> number = 11
                     // px11px -> parseInt(number2) -> number = NaN
                     // 11px11 -> parseInt(number2) -> number = 11
console.log(
    "number2 : ", parseInt(number2)
)

let number3 = "11.1"
number3 = Number(number3)
console.log(
    "number3 : ", number3, typeof(number3) 
)

let number4 = "11.4px"
number4 = parseFloat(number4) // icerisinde '11.4px' string ifade oldugu icin Number(number4) seklinde donusturme yapilamaz.
                         // eger '11.4px' bu yapiyi sayiya cevirmek istersek parseFloat(number4) diyerek 11.4'e cevirebiliriz.
                         // parseFloat(number4) -> parse parçala demektir. verilen ifadenin (basi string olamaz) sayi kismini alir.
console.log(
    "number4 : ", number4, typeof(number4)
)


// number veri tipinden string'e donusturmek:

let number5 = 55
number5=number5.toString()
console.log(
    typeof(number5)
)