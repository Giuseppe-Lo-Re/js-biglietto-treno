
// Ask to the user kilometers numbers who he wants to travel, passenger's age and convert in numbers:
const userKm = parseInt ( prompt( "Quanti chilometri vorresti percorrere?"));
const userAge = parseInt (prompt("Quanti anni hai?"));


// calculate the total price of the trip, according to these rules:
// the ticket price is defined on the basis of km (0.21 € per km):
const userSubtotal = userKm * 0.21;


//  a 20% discount must be applied for minors
discountOver18 = userSubtotal * 20 / 100;


//  a 40% discount must be applied for those over 65:
discountOver65 = userSubtotal * 40 / 100;


// The output of the final price must be put out with a maximum of two decimals:
if(userAge < '18') {
    userTicketPrice = 'Il prezzo del suo viaggio è pari ad euro  ' + (userSubtotal - discountOver18).toFixed(2) + ' .Grazie per aver scelto JSItalia!'
} else if(userAge > '65') {
    userTicketPrice = 'Il prezzo del suo viaggio è pari ad euro  ' + (userSubtotal - discountOver65).toFixed(2) + ' .Grazie per aver scelto JSItalia!'
} else {
    userTicketPrice = 'Il prezzo del suo viaggio è pari ad euro  ' + (userSubtotal.toFixed(2)) + ' .Grazie per aver scelto JSItalia!'
}


// Print the result on page:
document.getElementById("user-ticket-price").innerHTML = userTicketPrice;