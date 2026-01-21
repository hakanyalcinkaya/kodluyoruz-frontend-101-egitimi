// number

// number veri turu tanimlamak

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax

console.log(
    "Fiyat: " , price, 
    " KDV Oranı: " , tax, 
    " KDV Tutari: " , priceTax,
    " Fiyat : ", total
)

// arttirma ve azaltma islemleri

let counter = 320
counter = counter + 1
counter += 1
counter ++
console.log(counter)

counter --
counter -= 1
console.log(counter)

counter *= 10
console.log(counter)

counter /= 2
console.log(counter)


// islem onceligi:

console.log((2 + 3) * 10) // 50 cikmali ?

// mod (kalan) alma %

console.log("10'u 2'ye böldüğümüzde kalan: ",10 % 2)
console.log("10'u 3'e böldüğümüzde kalan: ",10 % 3)

// 8 urun alan koliye tum urunler sigiyor mu ?

console.log("Koli Kalan Urun ornegi: ", 18 % 2 )

// us alma **

console.log("2'nin 3. kuvveti: ",2**3)

// asagi yuvarlama islemi -> Math.floor

console.log("3.3 asagi yuvarlama:",Math.floor(3.8))

// Yukari yuvarlama islemi -> Math.ceil

console.log("3.8 yukari yuvarlama:", Math.ceil(3.8))

// yakina yuvarlama islemi -> Math.round

console.log("3.4 asagimi yukarimi:", Math.round(3.4))



//String to Number Convert (Convert.toInt gibi)
let stringNumber = "11"

let nemNumber = Number(stringNumber)