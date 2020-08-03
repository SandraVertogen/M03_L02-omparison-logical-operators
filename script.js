const age = 21;
const isFemale = true;
const driverStatus = "bob";
const name = 'Sandra';
const totalAmount = 120;

//if else statements
if (age >= 18) {
    console.log("Je mag binnenkomen!");
} else {
    console.log("Je bent te jong, je moet helaas buiten blijven...");
}

if (age >= 18 && isFemale) {
    console.log("Welkom op de ladiesnight!");
} else {
    console.log("Helaas vanavond mag je niet binnenkomen...");
}

if (age >= 18 && driverStatus === "bob") {
    console.log("Je mag zelf naar huis rijden!");
} else {
    console.log("Je mag niet meer zelf rijden.");
}


//Deel 1
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting op bier!");
} else if (age > 25) {
    console.log("Kom binnen,  maar je krijgt geen korting");
} else if (age < 18) {
    console.log("Helaas, je bent te jong, je mag niet binnen...")
}

//Deel 2
if (name === 'Bram' || name === 'Sarah') {
    console.log("Je krijgt een gratis biertje!");
} else {
    console.log("Je krijgt niks gratis.");
}

//Deel 3
if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Gratis (vega)bitterballen!");
} else if (totalAmount > 50 && totalAmount <= 100) {
    console.log('Gratis portie nachos!');
} else if (totalAmount > 100) {
    console.log("Gratis champagne!");
} else {
    console.log("Je krijgt geen gratis cadeau...")
}