
//
//
//
//
//

const titleElement = document.getElementById("welcome-title")
console.log(titleElement)

// Chiedi all’utente il suo nome
let firstName = prompt('Ciao! Come ti chiami?')
console.log(firstName)

// poi chiedi il suo cognome
let surname = prompt ('Qual è il tuo cognome?')
console.log(surname)

// poi chiedi il suo colore preferito
let favoriteColor = prompt ('Dimmi il tuo colore preferito!')
console.log(favoriteColor)

// e un numero
let number = prompt ('Ora scegli un numero.')
console.log(number)

// Infine scrivi sulla pagina il risultato della
// concatenazione di:
/* <nome><cognome><colorePreferito> <numero></numero> */
titleElement.innerHTML = firstName + surname + favoriteColor + number

