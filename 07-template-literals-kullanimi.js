// Template Literals Kullanimi

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log(
    "Merhaba", username, "sitemize hosgeldin", "mail adresin: ", email, " mail uzunlugu: ", email.length
)

let info = `Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}
mail adresinin uzunlugu : ${email.length}
borcunuz: ${ (2 + 3) * 5} TL
gunun saat bilgisi: ${new Date().getHours()}
`

console.log(info)
