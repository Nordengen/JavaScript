// -- Læreplan i Javascript --

// ✅ Steg 1. Variabler
// ✅ Steg 2. if/else-setninger
// ✅ Steg 3. Løkker (for, for...of)
// ✅ Steg 4. Funksjoner
// ✅ Steg 5. Brukerinput (med prompt())
// ✅ Steg 6. Arrays
// ✅ . Metoder som .filter(), .map(), .includes(), .slice(), .join(), .push() og mange flere
// Steg 7. Objecter

// Skrive til Cnsollen i nettleseren (F12 -> Consol)
console.log("javascript kode");

//////////////////////////////////////////////////////
// Oppgave 1: Be brukeren om navn--
//////////////////////////////////////////////////////
let navn = "Arne";
console.log("Hei, " + navn + "! Velkommen til Javasript.");

// Enkel beregning
let tall1 = 10;
let tall2 = 25;
let sum = tall1 + tall2;
console.log("Summen er: " + sum)


//let navn2 = prompt("Hva heter du?");
//console.log("Hei, " + navn2 + "! Velkommen til JavaScript");

//////////////////////////////////////////////////////
// Oppgave 2: Lage en enkel funksjon
//////////////////////////////////////////////////////

// Første fungsjon (en måte å organisere kode på)
function hils() {
    let navn3 = prompt("Hva heter du?");
    console.log("Hei " + navn3 + "! Håper du får en fin dag!");
    
}
//hils(); //Kaller funsjonen

//////////////////////////////////////////////////////
// Oppgave 3: If/Else-setninger og Brukerinteraksjon--
//////////////////////////////////////////////////////

/*let alder = prompt("Hvor gammel er du?"); //Her har ikke variablen en verdi enda, kun at det skal promtes ut tekst til skjerm.
alder = Number(alder);
if (alder >= 18) {
    console.log("Du er voksen!");
} else {
    console.log("Du er liten!");
} */

/*
let svar = prompt("Liker du JavaScript").toLowerCase();
if (svar === "ja") {
    console.log("Så bra!");
} else if (svar === "nei") {
    console.log("Kanskje du liker det ettter hvert.");
} else {
    console.log("Jeg forstod ike svaret ditt.");
}*/

//////////////////////////////////////////////////////
// Steg 4: Løkker (Loops)
//////////////////////////////////////////////////////

for (let i = 1; i <= 5; i++) {
    console.log("Dette er melding nr " + i);
}

let teller = 0;
while (teller < 3) {
    console.log("Løkker kjører, teller er: " + teller);
    teller++; //Øker teller med 1 hver gang
}

// Oppgave: Gjett et tall
/*
let hemmeligTall = 7; //Endre dette for å teste
let gjetning = Number(prompt("Gjett et tall mellom 1 og 10"));


while (gjetning !== hemmeligTall){
    gjetning = Number(prompt("Feil! Prøv igjen"));
}
console.log("Gatulerer det var riktig!");
prompt("Du gjettet riktig!");
*/

// Flere Oppgaver med Løkker!

// Oppgave 1: Skrive ut tall fra 1 til 10
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }
//Spørsmål: Hva må du endre for å få oddetall i stedet?
// for (let i = 1; i <= 10; i += 2) {
//     console.log(i);
// }

//Oppgave 3: Skriv ut 7-gangen:
// for (let i = 1; i <= 10; i ++) {
//     console.log("7 x " + i + " = " + (8 * i));
// }

//Oppgave 4: Teller ned fra 10 til 1 med while-løkke
let nedtelling = 10;
while (nedtelling > 0) {
    console.log(nedtelling);
    nedtelling--;
}
console.log("Boom!");

//////////////////////////////////////////////////////
// Steg 5: Funksjoner med Parametere
//////////////////////////////////////////////////////

// Oppgave 1: En enkel funksjon med én parameter
function siHei(navn) {
   console.log("Hei, " + navn + "!");
}
siHei("Ola");
siHei("Emma");

//Oppgave 2: En funksjon med to parametere
function leggSammen(a,b) {
    let sum = a + b;
    console.log("Summen av " + a + " og " + b + " er " + sum);
}
leggSammen(3, 5);
leggSammen(45,0);

// Oppgave 3: Returnere en verdi
function dobbel(tall) {
    return tall  *2;
}
let resultat = dobbel(4);
console.log("Dobbel verdi er: " + resultat);

// Oppgave 3: Lag en kalkulator-funksjon
function kalkulator(tall1, tall2, operator) {
    if (operator === "+") {
        return tall1 + tall2;
    } else if (operator === "-") {
        return tall1 - tall2;
    } else if (operator === "*"){
        return tall1 * tall2;
    } else if (operator === "/") {
        if (tall2 === 0) {
            return "Kan ikke dele på 0!";
        }
        return tall1 / tall2;
    } else {
        return "Ugyldig operator!";
    }
}
console.log(kalkulator(10, 1, "/"));
// Kalkulator med brukerinput via prompt
// let input1 = Number(prompt("Skriv inn det første tallet:"));
// let input2 = Number(prompt("Skriv inn det andre tallet"));
// let operator = prompt("Velg en operator (+, -, *, /:)");
// // Bruker funksjonen med inputen frabrukeren
// let resultat2 = kalkulator(input1, input2, operator);
// console.log("Resultat " + resultat2);

//////////////////////////////////////////////////////
// Steg 6: Arrays
//////////////////////////////////////////////////////

// Info: En array er en liste eller en samling av verdier lagret i én enkelt variabel.

// Opprette en Array med bilder
const cars = [];
cars[0]= "Volvo";
cars[2]= "BMW";
cars[1]= "Saab";
console.log(cars); // Viser alle bilder i arrayet
console.log(cars[2]); // Viser kun bilen på plass 3 i arrayet (0 er første plass)


//Eksempel: Lage en array
let frukter0 = ["eple", "banan", "apelsin"];
console.log(frukter0[0]);

//Oppgave 1: Løkke gjennom en array
let frukter = ["eple", "banan", "appelsin"];
for (let i = 0; i < frukter.length; i++) {
    console.log("Frukt nummer " + (i + 1 ) + ": " + frukter[i]);
}

// Endre eller legge verdi til i en array
let tall = [3, 5, 10];
tall.push(4); // Legger til  på sltten av arrayet
console.log(tall); // Lister ut ny lengde, økt med 1 (4 i lengde)
tall[1] = 99; // Endrer plass 1 i Arrayet fra verdi 5 til 99
console.log(tall);
console.log(tall.length); // Lister ut lengde i Arrayet
console.log(tall.pop()); // Fjerner siste element
console.log(tall); // Lister ut ny lengde, reduert med 1 (3 i lengde)
//Vanlige array-funksjoner//
// Funksjon	        Hva den gjør
// push()	        Legger til verdi på slutten
// pop()	        Fjerner siste element
// length	        Gir lengden på arrayen
// includes(verdi)	Sjekker om verdi finnes i arrayen
// indexOf(verdi)	Returnerer posisjon (indeks)

// Enkle oppgaver i Arrays

//  Oppgave 1: Lag en array og vis elementene
let dyr = ["katt", "hund", "hest"];
console.log(dyr[0]);
console.log(dyr[3]); // Viser "undefined"

// Oppgave 2: Legg til og fjern elementer
let filmer = ["Incaption", "Interstellar"];
filmer.push("Tenet"); // LEgger til en film i arrayet
console.log(filmer);
filmer.pop(); // Fjerner siste
console.log(filmer);

// Oppgave 3: Bruk løkke til å skrive ut alt i en array
let farger = ["rød", "grønn", "blå", "gul"];
for (let i = 0; i < farger.length; i++) {
    console.log("Farge " + (i + 1) + ": " + farger[i]);
}
// Lister ut Plassen (fra variabelen "i") og fargen. Eks: Farge 1: rød

// Oppgave 4: Sjekk om noe finnes i arrayen
let navn2 = ["Thomas", "Sigrid", "Seth"];
let søk = "j";
if (søk.trim() === "") {
    console.log("Du har ikke skrevet inn noe!");    
} else if (navn2.includes(søk.trim())) { // trim() fjerner mellomrom før og etter teksten
    console.log(søk + " finnes i Arrayet!");
} else {
    console.log(søk.trim() + " finnes ikke i Arrayet");
}

// Spørr chatGPT om å lege denne array oppgaven, men istedet for å sekkeom noe bare finnes, så legger man inn unikt navn i arrayet.

// Oppgave: Lag en "venneliste-sjekker"
let navnVenner = ["Arne,", "Thomas", "Siggen", "Sagg", "Sugg"]; // Array
let søker = "Thomass"; // Bruker får å søke gjennom variabelen navnVenner;

if (søker.trim() === ""){
    console.log("Du har ikke skrevet inn noe!")
} else if (navnVenner.includes(søker.trim())){ // includes() A boolean - true if the value is found, otherwise false. Verdien settes inn i () som er variabelen "søker"
    console.log(søker.trim() + " finner i vennelisten!");
} else {
    console.log(`${søker} finnes ikke i listen!`);
}
// Alternetiv til å teste om variabelen "søker" inneholder en verdi\skrevet inn noe
if (!navnVenner.includes(søker.trim())) {
    console.log(`${søker} finner ikke i listen!`);
}

// Ekstra Oppgave 1.0: Smartsøk i en venneliste (.map() i arrays)
let venneliste = ["siggH", "Sigrid", "siGGen", "SAGG", "SuGG"];
let søkNavn = "siggh"; // søkNavn-variabelen brukef for å gjøre søk i venneliste-variabelen.

if (søkNavn.trim() === "") {
    console.log("Det er ikke skrevet inn et navn");
} else if (venneliste.map(n => n.toLowerCase()).includes(søkNavn.trim().toLowerCase())){
    console.log(`${søkNavn} finnes i listen!`);
} else {
    console.log("Navnet finner ikke!");
}
// Forklaring:
// venneListe.map(n => n.toLowerCase()) En Arrow funksjon. Sørger for at hele arrayen er i små bokstaver
// søk.trim().toLowerCase()	            Sørger for at søket også er i små bokstaver
// includes(...)	                    Nå kan vi sammenligne nøyaktig og få korrekt resultat

// Ekstra Oppgave 1.1: Smartsøk i en venneliste - Finne index av nanve som blefunnet
let venner = ["siggH", "Sigrid", "siGGen", "SAGG", "SuGG"];
let søk2  = "Siggen";
// Gjør både array venner og søk til små bokstaver:
let småVenner = venner.map(n => n.toLowerCase());
let søkTrimmet = søk2.trim().toLowerCase();

let finneIndex = småVenner.indexOf(søkTrimmet); // Finne indexen, hvor navnet er plassert i arrayet. 
// indexOf() returnerer "0,1,2,3" om veriden finnes. Om verdien ikke finnes, returneres -1

if (søk2 === "") {
    console.log("Ingen navn er skrevet inn!")
} else if (finneIndex != -1) { // .indexOf() returnerer -1 om veriden ikke finnes
    console.log(`${søk2} er på plass ${finneIndex} i listen "venner"!`);
} else {
    console.log(`${søk2} finnes ikke i listen!`)
}

// Ekstra Oppgave 1.2: Bruke for-løkke til å skrive ut hele vennelisten i små bokstaver
let venneListe2 = ["Emma", "LARS", "Thomas", "HENRK", "SETH"];

for (let i = 0; i < venneListe2.length; i++) { // .length kan brukes om man trenger lengden eller hente ut et eller flere elementer fra arrayet.
    console.log(venneListe2[i].toLowerCase()); // Lister ut alle navnene i Arrayet
    console.log(venneListe2.length); // Lister ut lengden ti arrayet (elementene)
}

// Bonsu Oppgave 1: Bonus: Begge samlet i én kode
let venner2 = ["Siggen", "TÅMMAS", "TOMtass", "krisT"];
let søk3 =  " Siggen  ";

let småVenner2 =  venner2.map(n => n.toLowerCase()); // Gjøre hvert navn til små boksataver.
let søkTrimmet2 = søk3.trim().toLowerCase(); // Fjerne mellomrom samt gjøre søkeordet til små boksataver.
let funnetIndex = småVenner2.indexOf(søkTrimmet2); // Med .indexOf vinner vi indeks i arrayet med søkeodet.

if (søk3 === ""){
    console.log("Du må skrive inn noe!");
} else if (funnetIndex != -1) { // .indexOf() returnerer posisjonen til søket\navnet i arrayet samt gir verdien -1 om den ikke finnes
    console.log(`Navnet "${søkTrimmet2}" finnes i Arrayet på plass ${funnetIndex}`);
} else {
    console.log("Navnet finner ikke i Arrayet!");
}

console.log("Liste over navn i små boksatver");
for (let i = 0; i < venner2.length; i++){
    console.log(venner2[i].toLowerCase()); // Lister ut alle navnene i Arrayet
}

// Bonus Oppvagen over igjen, men ved å skrive inn søkeordet via prompt (interaktiv versjon): 
// Mål:
// Bruk prompt() for å la brukeren skrive inn et navn.
// Gjør både navnene og søket små (case-insensitivt).
// Finn ut om navnet finnes – og i så fall, skriv ut hvor.
// Hvis tomt søk → gi tilbakemelding.
let venner3 = ["Siggen", "TÅMMAS", "TOMtass", "krisT"]; // Arryet
//let søk4 = prompt("Skriv innet navn du vil søke etter:"); // Søkeordet vi skriver inn via prompt-boksen
let søk4 = "siggen"; // Kommenterte ut prompt så den ikke promter heletiden
let småVenner3 = venner3.map(n => n.toLowerCase()); // Gjør alle bokstaver i navnene i arrayet små.
let søkTrimmet3 = søk4.trim().toLowerCase(); // Fjerner mellomrom og tviner alle bokstavene små.
let finneIndex3 = småVenner3.indexOf(søkTrimmet3); // Finner indeks, altså hivlken plass i arrayet ordet er på.

if (søkTrimmet3 === "") {
    console.log("Du må skrive inn et navn!");
} else if (finneIndex3 != -1) { // .indexOf() returnerer posisjonen til søket\navnet i arrayet samt gir verdien -1 om den ikke finnes

    console.log(`Navnet "${søkTrimmet3}" finnes i arrayet "Venner" og er på plass ${finneIndex3}!`);    
} else {
    console.log("NAvnet finnes ikke i Arrayet!")
}

// Bonus Oppvagen 1 igjen men med medoden: findIndex()
// Frdel: Gir oss mer fleksibilitet – særlig når vi jobber med flere betingelser eller mer avanserte søk.
// Hva gjør findIndex()?
// Går gjennom arrayen
// Returnerer indeksen til det første elementet som matcher en betingelse
// Hvis ingen matcher: returnerer -1
let venner5 = ["siGGen", "saGg", "TåmM", "SiGriD", "SETH"];
// let søk5 = prompt("Skriv inn et navn du vil søke etter:"); Kommenterte ut prompt-meldignen
let søk5 = "siggen";
let søkTrimmet5 = søk5.trim().toLowerCase();
let funnetIndex5 = venner5.findIndex(navn => navn.toLowerCase() === søkTrimmet5);  // Finn indeks ved å sammenligne hvert navn (gjort små) med søket

if (søkTrimmet5 === ""){
    console.log("Du må skrive inn et navn!");
} else if (funnetIndex5 != -1) {
    console.log(`Navn "${søkTrimmet5}" finner i arrayet og er på plass ${funnetIndex5}!`);
} else {
    console.log(`Navnet "${søkTrimmet5}" finnes ikke i arrayet!`)
}
// Forklaring:
// Med indexOf() måtte vi lage en ny array med små bokstaver først.
// Med findIndex() slipper vi det – vi kan jobbe direkte i funksjonen med .toLowerCase()

// Bonus Oppvagen 1: Skrive ut hele vennelisten i små bokstaver med en for-løkke
let venner6 = ["Sagg", "TÅmaSS", "SigriD", "THOMAS", "seth"];

for (let i = 0; i < venner6.length; i++) {
    console.log("Lister ut med for() med i: " + venner6[i].toLowerCase())
}
// Ekrta: Skrive ut hele vennelisten med: for...of – enkel og lesbar løkke
for (let navn of venner6) { // går gjennom hver verdi i arrayet. "navn" er en automatisk variabel for hvert element (ingen bruk av "i" eller indeks).
    console.log(navn.toLowerCase());
}
// Ekstra: Skrive ut hele vennelisten med: forEach() – funksjonsbasert måte
venner6.forEach(function(navn) { // forEach() går gjennom hvert element og kjører en funksjon én gang per element.
    console.log("Store bokstaver med forEach: " + navn.toUpperCase()) // navn er igjen hver enkelt verdi i arrayen.
});
// Ekstra: Man kan også skrive ut navnene fra arrayene med en arrow function:
venner6.forEach(navn => console.log("Lister ut med foEach arrow function: " + navn.toLowerCase()));
// Ekstra: Skriv ut alle navn i arrayen med små bokstaver, sammen med hvilken plass de er på i listen.
for (let [indeks, navn] of venner6.entries()) { // array.entries() gir oss enliste med indeks og verdi for hvert element som vi her legger i Index og navn
    console.log("Plass " + indeks + ": " + navn.toLowerCase() + " - Bruker for() med indeks, navn");
}
// Ekstra oppgave: Bruk destructuring med .entries() for å skrive ut navn og plassering
//Lag en for...of-løkke som bruker .entries() og destructuring til å skrive ut:
let dyr2 = ["Hund", "katt", "Fugl", "Hest"];

for (let [index, navn] of dyr2.entries()) { // venner.entries() gir deg et array som ser slik ut i hver runde: [0, "Hund"], [1, "Katt"], osv.
    console.log(`Plass ${index}: ${navn.toLowerCase()}`) // I hver runde av løkka, tar let [indeks, navn] og plukker ut: første verdi til indeks, andre verdi til navn.
}

// Oppgaver med Array-metoder (neste nivå)

// Oppgaver om Filter og map:
// Oppgave 1:
// Lag en ny liste med bare navn som har 5 bokstaver eller mer
// Gjør slik at alle navn i denne nye listen vises med bare små bokstaver
// Skriv den nye listen til konsollen
let navn3 = ["Thomas", "SIGG", "saGG", "KristUS", "SETH", "SETT", "KåreKløStokk"];
let navnLengde = navn3.filter(n => n.length >= 5).map(n => n.toLowerCase()); // .filter() finner alle matchene
console.log(`5+ bokstaver: ${navnLengde}`);
//  Oppgave 2: Liste ut alle navn som starter på "s":
let Snavn = navn3.filter(n => n.toLowerCase().startsWith("s")); // .filter() finner alle matchene. Gjør at det fungerer uansett om det er "Sigg" eller "sigg"
console.log(`Navn starter med S: ${Snavn}`);
//Oppgave 3: Legge til/fjerne elementer dynamisk
// Egge til på slutten av array med .push()
let leggeTilNavn = navn3.push("Joey");
console.log(`Lagt til et navn:  ${navn3}`);
// Fjerne navn med .pop()
let fjerneNavn = navn3.pop();
console.log(`${fjerneNavn} ble fjernet fra listen: ${navn3}`);
// Legge til nytt navn først i arrayet:
let leggeTilFørst = navn3.unshift("tÅÅmmass"); // .unshift() Legger til først i array
console.log(`Lagt til nytt navn først i arrayet: ${navn3}`);
// .shift()	Fjerner første element
let fjerneFørsteNavn = navn3.shift();
console.log(`Første navnet ble nå fjernet fra Arrayet: ${navn3}`);
console.log(`Første navnet "${navn3.shift()}" blir nå fjernet direkte: ${navn3}`) // Bruker .shift() il å fjerner første navnet direkte i consolen
// Ekstra oppgave (med push() og pop(): Lage Handleliste:
// Du har en tom handleliste. Du skal:
// - Legge til varer i handlelisten med push()
// - Fjerne varer med pop()
// - Skrive ut listen underveis
let handleliste = [];

handleliste.push("Brød");
handleliste.push("Melk");
handleliste.push("Egg");
console.log(`Handlelisten inneholder nå: ${handleliste}`)

let fjerneVare = handleliste.pop();
console.log(`Vare ${fjerneVare} ble fjernet fra handlelisten: ${handleliste}`)
// Utvid koden slik at:
// - Du legger til to nye varer etter at en er fjernet
// - Skriver ut hvor mange varer det er til slutt med handleliste.length
handleliste.push("Kylling", "Skinke");
console.log(`Handlelisten innheholder nå: ${handleliste} og dette er totalt ${handleliste.length} varer.`)

// Bruke .slice() og .join() - Kopiere deler av array eller slå sammen til en tekststreng.
// .slice(start, slutt) kopierer fra start-indeksen opp til, men ikke med slutt
// Brukes når du vil jobbe med en del av et array
console.log(`${handleliste}`);
let utvalg = handleliste.slice(1, 4);
console.log(`${utvalg}`);

// .join() – slår sammen array til en tekststreng
// .join(separator) setter sammen alle elementene med separatoren du velger
// " " = mellomrom, "," = komma, "-" = bindestrek osv.
// Resultatet er en streng, ikke en array
let setning = handleliste.join(" ");
console.log(`${setning}`)

// Oppgave 4: Søkemotor for navneliste
// Kombinere det jeg steg 1-3 : Navnelister med søk, filtrering og tilbakemelding
// Arrays
// filter() / find() / includes()
// map() og join()
// Brukerinput (med eller uten prompt())
// Betingelser (if/else)
// Litt finere tilbakemeldinger til brukeren
let navn7 = ["Sara", "Thomas", "Seth", "Siggen", "Atle", "Siri"];

let søk7 = "Sara";

let resultat7 = navn7.filter(n => n.toLowerCase().startsWith(søk7.toLowerCase())).map(n => n.toLowerCase()); // .filter() finner alle matchene
if (resultat7.length > 0) {
    console.log(`Fant følgende navn på "${søk7}": ${resultat7.join(",")}`); // .join() – slår sammen array til en tekststreng
}else {
    console.log(`Fant ingen navn som begynner med "${søk7}"`);
}
// Utvide oppgaven: 
// - Legge til flere navn i arrayet
// - Bruk en søkevariabel (let søk = ...) og test om navnet finnes.
navn7.push("Tassen", "Nord", "Sigrid"); // Lagt til flere navn
console.log(`${navn7}`) 
let søk8 = "S"; // Søkevariabel for å sjekke om navnet finnes
let resultat8 = navn7.filter(n => n.toLowerCase().startsWith(søk8.toLowerCase())).map(n => n.toLowerCase()); // .filter() finner alle matchene
if (resultat8.length > 0) {
    console.log(`${resultat8}`)
}
// Oppgave: Navnesøk med filtrering (kun litt hjelp på vei her)
// - 1. Start med en navneliste:
let navn9 = ["Sara", "Ole","Thomas", "Siggen","Seth","Arne","Alfred","Sabrina"];
let søk9 = "ne"; // Variabel for søke-bokstaven/ordet (dropptet prompt())
// UTVIDELSE: Sortér resultatene alfabetisk før visning: .sort()
// let resultat9 = navn9.filter(n => n.toLowerCase().startsWith(søk9.toLowerCase())).map(n => n.toUpperCase()).sort(); // Finner ord som starter på 
let resultat9 = navn9.filter(n => n.toLowerCase().includes(søk9.toLowerCase())).map(n => n.toUpperCase()).sort(); // Søker å hele tekststrengen

if (resultat9.length > 0) {
    console.log(`Fant ${resultat9.length} navn på "${søk9}": ${resultat9.join(", ")}`)
} else {
    // UTVIDELSE: Telle antall navnsom ble funnet
    console.log(`Ingen navn funnet på følgende søk: ${søk9}`)
}
// .filter() - Finner alle matchene
// .map(n => n.toUpperCase() - Gjør alle tregg fra .filter() store
// .join() – slår sammen array til en tekststreng

//// VIDERE OPPGAVER i ARRAYS ////

// Oppgave 1: Kombiner filter() og map() med tall
let tall3 = [4, 15, 100, 23, 42, 7, 3, 18];
// - Lag en ny array med tall som er partall og større enn 10
// - Sortere ut partall, sjekker jeg om de kan deles på 2 (eks: 4 % 2, 2 går to ganger opp i 4. Når vi har når tallet 4, er det ingen rest dvs. 0 rest)
let filtrereTall  = tall3.filter(t => t % 2 === 0 && t > 10).sort() // Henter ut partal (even) samt de som er større enn 10
let tekstStreng = filtrereTall.map(t => `Tallet: ${t}`) // GJøre om hver instans til tekststreng

console.log(`${tekstStreng}`)

// Oppgave 2: Rydd opp i tekst med map() og trim()

let råData = [" sara", "THOMAS ", " Siggen", "LARS ", "Kari "];
// 1. Fjerne mellomrom
// 2. Alt til små bokstaver

let data = råData.map(n => n.toLowerCase().trim()); // Gjør hver enkel verdi/navn små og fjerner mellomrom
console.log(`${data.join(", ")}`) // Med "template-literal": Bruker join() for å gjøre om hele til tekststren samt med komma kun mellom nanvene.
console.log(data.join(", ")) // Bruker join() for å gjøre om hele til tekststren samt med komma kun mellom nanvene.
console.log(data) // Gir (5) ['sara', 'thomas', 'siggen', 'lars', 'kari']

// Oppgave 3: Bruk .slice() til å lage en ny liste

let navn10 =  ["Sara", "Thomas", "Siggen", "Lars", "Kari", "Marius", "Anne"];
let treSisteNavn = navn10.slice(4);
console.log(treSisteNavn);

// Oppgave 4 – Bruk .join() til å lage én streng av navnene

let navn11 = ["Sara", "Thomas", "Siggen", "Lars", "Kari"];
// 1. Bruk .join() til å lage en setning med alle navnene på én linje – skilt med komma og mellomrom:
let navnSamlet = navn11.join(", ");
console.log(navnSamlet);
// 2. Deretter – lag en ny versjon som bruker " og " før siste navn i stedet for bare komma:
let førsteDel = navn11.slice(0, -1); // I slice(start, end), kan du bruke negative tall for å telle baklengs fra slutten av arrayet.
console.log(førsteDel);
let sisteNavn = navn11.slice(4); // Måte 1 å vise resultatet på
console.log(`Måte 1: ${førsteDel.join(", ")} og ${sisteNavn}`); 
let sisteNavn2 = navn11[navn11.length -1]; // Måte 2 å vise resultatet på
console.log(`Måte 2: ${førsteDel.join(", ")} og ${sisteNavn2}`); 

// Bonusoppgave: Lag en fin setning av navnene i arrayen
// Endrer vi på antall navn i arrayet nedenfor, så opdateres resultattet deretter.
let navn12 = ["Sara", "Thomas", "Siggen", "Seth", "Kari"];
let førsteDel2 = navn12.slice(0, -1); // Henter ut alle navn uten om det siste navnet 
let andreDel2 = navn12.slice(-1) // Henter ut kun det siste navnet. OBS: slice(-1) gir et nytt array med ett element, f.eks. ["Kari"]
// Måte 1 å hetne ut siste verdi i arrayet: Resultattet blir et array
let etNavn = navn12.length;
// Måte 2 å hetne ut siste verdi i arrayet: Resultattet bri en streng og ikke array)
let sisteNavn3 = navn12[navn12.length - 1]; // Henter u siste navn som string og ikke som array.
console.log(sisteNavn3); 
if (etNavn === 1) {
    console.log(`${andreDel2} - Antall navn: ${etNavn}`) // Vises kun når det er et navn i Arrayet.
} else if (etNavn < 1) {
    console.log(`Ingen navn i arrayet `) // Vises kun når det ikke er noen navn i arrayet
} else {
    console.log(`${førsteDel2.join(", ")} og ${andreDel2}`); // Viser alle navn i arrayen etterhverandre, men legger til "og" før siste navn
}


//////////////////////////////////////////////////////
// Steg 7. Objekter
//////////////////////////////////////////////////////

// HER sakl jeg gå gjennom: 
// Trinn 1. Objekter (objects)
// Trinn 2. Funksjoner som tar imot og returnerer data
// Trinn 3. Array med objekter
// Trinn 4. Avansert logikk:
// Trinn 5. Interaktive mini-prosjekter

// ---- Steg 7 - Trinn 1 ---
// Objekter

// Oppgave 1 (Steg 7: Objekter): Lag et objekt

// - Lag et objekt som representerer deg selv, med følgende egenskaper:
// - navn (streng)
// - alder (tall)
// - erStudent (boolean)
// - interesser (array med 2–3 hobbyer)

let person = {
    fNavn: "Morten",
    alder: 36,
    erStudent: false,
    interesser: ["musikk", "kode", "øl", "whisky"]
};
console.log(person.fNavn, person.erStudent, person.interesser[0])

// Oppgave 2 (Steg 7: Objekter): – Flere personer i en array
// - Lag en array som heter personer, som inneholder flere person-objekter (minst 3).
// - Hver person bør ha:
// - fNavn
// - alder
// - interesser (minst 2)

let personer = [
    {
        fNavn: "Sara",
        alder: 26,
        interesser: ["koding", "sykle", "serier"]
    },
    {
        fNavn: "Thomas",
        alder: 27,
        interesser: ["gaming", "aksjer", "styrketrening"]
    },
    {
        fNavn: "Siggen",
        alder: 26,
        interesser: ["koding", "vin", "fotball"]
    }
];
console.log(personer[0].fNavn) // Tester at det fungerer. Vleger først første plass i arryaet "Personer" og deretter egenskapen.

// Måte 1 å hente ut og vise innhold fra objektet Personer
let teller2 = 1; // Gjør det mulig å vite plassen i arrayet. Det fir ikke for...of-løkka.
for (let person of personer) {
    console.log(`Person ${teller2} heter ${person.fNavn} og er ${person.alder} år. Første interesse: ${person.interesser[0]}`)
    teller2 ++; // Letter til en i teller for hver gang scriptet løper gjennom denne løkka.
}

// Måte 2 å hente ut og vise innhold fra objektet Personer
for (let i = 0; i < personer.length; i ++) {
    console.log(`${personer[i].fNavn} er ${personer[i].alder} år gammel!`)
}

personer.forEach((person, indeks) => {
    console.log(`${person.fNavn}`);
})

// Oppgave 3 (Steg 7: Objekter): – Vis navn og alder - Delt i 3 oppgaver

// Oppgave 3 - Del 1: 
// - Lag en for...of-løkke som skriver ut:
// - "Sara er 26 år."
let personer2 = [
    {
        fNavn: "Sara",
        alder: 26
    },
    {
        fNavn: "Thomas",
        alder: 31
    },
    {
        fNavn: "Siggen",
        alder: 36
    }
];

for (let person of personer2) {
    console.log(`${person.fNavn} er ${person.alder} år.`)
    break; // Stopper loopen etter første iterasjon/gang den løper gjennom løkka. Da får vi "Sara er 26 år." som resultat.
}

// Oppgave 3 - Del 2: Vis bare de over 30 år
// - Bruk en for...of-løkke eller filter() og skriv ut:
// - "Thomas er over 30 år."
for (let person of personer2) {
    if (person.alder > 30) {  // De som  er større enn 30 
        console.log(`${person.fNavn} er over 30`)
        break;
    }    
}

// Løses med filter()
let peronOver30 = personer2.filter(p => p.alder > 30);
for (let person of peronOver30) {
    console.log(`${person.fNavn} er over 30 år. Dette ble måte to.`)
}

// Oppgave 3 - Del 3: Legg til en ny person (i eksisterende Array personer2 lenger opp) og vis oppdatert liste
// - Bruk .push() til å legge til en ny person i arrayen:

personer2.push({
    fNavn: "Seth",
    alder: 20
});

personer2.forEach((person, indeks) => {
    console.log(`${person.fNavn} er ${person.alder} år.`)
})

// Oppgave 3 - Ekstra: Kun finne den første som matcher:
let enPerson = personer2.find(p => p.alder > 30);
if (enPerson) {
    console.log(`${enPerson.fNavn} er første person vi fant i arrayet som er over 30 år.`)
}

// Kun test av forEach-løkke, for å forstå den
let tall10 = [10, 20, 30];
tall10.forEach((verdi, indeks) => { // Går gjennom løkka her 3 ganger her da det er tre verdier i arrayet.
    console.log(verdi, indeks) // Første gang innholder "verdi" tallet 10 og "indeks" får da verdien 0 (1. plass).
})
// 10 0
// 20 1
// 30 2

// Oppgave 4 – Personer med interesser - 3 deler
let personer3 = [
    {
        navn: "Sara",
        alder: 26,
        interesser: ["musikk", "trening", "matlaging"]
    },
    {
        navn: "Thomas",
        alder: 31,
        interesser: ["kode", "gaming", "musikk"]
    },
    {
        navn: "Siggen",
        alder: 36,
        interesser: ["bøker", "jogge", "reising"]
    }
];

// Oppgave 4 - Del 1: List opp interessene til hver person
personer3.forEach((element, indeks) => {
    console.log(`${element.navn} har følgende interesser: ${element.interesser.join(", ")}`)
})
// Oppgave 4 - Del 2 - Finn personer som liker "musikk"
let likerMusikk = personer3.filter(p => p.interesser.includes("musikk")); // Sjekker om arrayet "interesser" inneholder verdien "musikk".
for (let person of likerMusikk) { // Bruker for...of tl å liste ut hver person som vi får treff på
    console.log(`${person.navn} liker musikk.`)
}
// Oppgave 4 - Del 3: Legg til en ny person i arrayen med push()
personer3.push(
    {
        navn: "Seth",
        alder: 20,
        interesser: ["trening", "sjokolade", "musikk"]
    }
)
// Oppgave 4 - Bonus (valgfritt):
let likerMusikkTrening = personer3.filter(p => p.interesser.includes("musikk") && p.interesser.includes("trening"));
for (let person of likerMusikkTrening) {
    console.log(person.navn);
}

// Oppgave 4 - Bonusoppgave: Finn alle personer som har en bestemt interesse
// Oppgavetekst:
// - Lag en funksjon eller et lite søk der du skriver inn ønsket interesse i en variabel, og så listes alle personer med den interessen ut.
let personer4 = [
    {
        fNavn: "Sara",
        alder: 26,
        interesser: ["musikk", "trening", "koding"]
    },
    {
        fNavn: "Thomas",
        alder: 31,
        interesser: ["film", "matlaging", "løping"]
    },
    {
        fNavn: "Siggen",
        alder: 36,
        interesser: ["TRENING", "musikk", "reising"]
    },
    {
        fNavn: "Seth",
        alder:20,
        interesser: ["bil", "sjokolade", "musikk"]
    }
];

let interesseSøk= "TRENing"; // Søke etter en spesifikk interesse
// let søkInteresse = personer4.filter(p => p.interesser.includes(interesseSøk.trim().toLowerCase())); // Her gjør vi ikke bokstavenesmå fra  arrayen
let søkInteresse = personer4.filter(p => p.interesser.some(i => i.toLowerCase() === interesseSøk.trim().toLowerCase())); // Her gjør vi bokstavene små både i søket og i arrayen

if (interesseSøk.trim() === "") { // Sjekker om det er skrevet inn noe.
    console.log("Det er ikke skrevet inn noen intereesse.")
} else {
    if (søkInteresse.length > 0) { // Sjekker om det er funnet en mach fra arrayet (antallet matcher ligger i denne variabelen).
        for (let person of søkInteresse) { // Går gjennom alle matchene som skrver ut dette i consol log nedenfor.
        console.log(`${person.fNavn} har ${interesseSøk.trim().toLowerCase()} som interesse.`)
        }
    } else { // Om ingen matcher arrayet, havner søket her.
        console.log(`Ingen personer med interesse ${interesseSøk.trim().toLowerCase()}`)
    }
}
// Bonusforslag til oppgave over - Oppgave 4 - Bonusoppgave

// som() oppgave- Sjekk om et navn finnes i en liste:
let navnListe = ["Lise", "Anders", "Tobias", "Sara"];
let søkeNavn = "TOBIAS"; // Søkeord
let finnesNavn = navnListe.some(n => n.toLowerCase().trim() === søkeNavn.toLowerCase().trim()) // some() returnerer true/false
// Her sjekker vi om verdien i variabelen "søkeNavn" (eks. "tobias", gjort om til små) også er i arrayet "navnListe". 
// Her finnes Tobias, og derfor returnerer den True. Da kan man f.eks. ha en if/else: hvis ture, "Tobias eksisterer i arrayet" osv.
console.log(finnesNavn) // Her visers det nå ture om det var en match i arrayet fra søkevariabelen (søkeNavn).

// Utvide oppgaven over - Oppgave 4 - Bonusoppgave - Lage en funksjon som (bruker samme array, altså "person4"):
// - Tar inn en interesse som parameter (f.eks. "musikk")
// - Søker i arrayen personer4
// - Logger alle personer som har denne interessen
function søkEtterInteresse(interesse) {
    if (interesse.trim() === "") {
        console.log("Du må skrive inn en interesse!")
        return
    }
    let resultat = personer4.filter(n => n.interesser.some(i => i.toLowerCase() === interesse.trim().toLowerCase())) // Finner samme interesser i arrayet som i variabelen.
    // filter() beholder bare matchene
    // some() sjekker om minst et ellement i arrayen matcher med innholdet i parameteret i "interesser"
    console.log(resultat.fNavn)
    console.log("---------------")
    if (resultat.length > 0) { // Om den fant minst en match, går den inn her.
        for (let person of resultat) { // for...of-løkke. Går gjennom arrayet "resultet" og hver match legges i den nye variabelen "person" for hver runde.
            console.log(person.fNavn) // For hver runde/loop listetes personens fornanv ut i konsollen som har interessen man skrev inn.
        }
    }        
}

søkEtterInteresse("musikk") // Her skriver vi inn en interesse som parameter i denne funksjonen. Navnene til persoenen som har dette liset ut i consolen.

// Dette er kuneen test for å se vordan inn-parameteret fungerer. "miinVerdi" kan hete hva som helst i funksjonen.
function søkEtterVerdi(minVerdi) {
  console.log("Du søkte etter: " + minVerdi);
}
søkEtterVerdi(23); // Output: Du søkte etter: 23

// Utvide oppgaven over - Oppgave 4 - Bonusoppgave - Tar inn flere interesser og viser de so har begge/alle
// - Lag en funksjon som:
// - Tar inn en array av interesser, som ["musikk", "trening"]
// - Søke etter personer som har alle disse interessene i sin interesser-liste. Matcher alle interessene, lilstes navnet til personen ut i consolen.
// - Skriver ut navnene på de som matcher
// --- Jeg skriver je hele funksjonen på nytt da den blir litt annerledes, men bruker samme arrayet "personer4" lenger opp ---
function søkEtterInteresse2(interesseListe) {
    if(!Array.isArray(interesseListe) || interesseListe.some(item => item.trim() === "")) { // Array.isArray sjekker om paremeteret "interesser" inneholder array, noe det må være.
        console.log("Input er enten ikke et Array eller har ikke verdi.") // Om "interesser" ikke er et array, blir det false og går inn her
        // Havner inn her og blir ugyldig input om :
        // - input ikke er en array
        // - input ar array, men ikke kun står med ""
        // - input ar array, men står med fnutter og mellomrom " "     
        //   some() om minst en av elementene i arrayet har "" eller " ", havner den inn her.
        return;
    } 
    console.log("Alt ok:", Array.isArray(interesseListe)) // Viser at inpt er en Array med minst en verdi/interesse innskrevet.
    let søk10 = interesseListe.map(n => n.toLowerCase().trim());
    let resultat10 = personer4.filter(person => søk10.every(inter => person.interesser.some(i => i.toLowerCase() === inter))); 
    // FORKLARING   
    // filter() beholder bare matchene (de som har interessene fra input).
    // person => innerholder en person fra arrayet "personer4" om gangen.
    // every() returnerer true om alle elementene oppfyller teringelsen (om alle interessene fra søket er helt like de i arrayet)
    // søk10.every(inter => ...) alle verdiene fra input havner i denne midlertidige "inter"-variabelen (en og en for hver gang)
    // inter-variabelen opprettets i every()-metoden (må man bare kallle den midlertidige variaelen for noe, kan hete hva som helst)
    // === inter her sjekker vi om interessene i arrayet vi har gått gjennom (person.interesser.some...) er lik den midlertidige variabelen
    // for...of-løkka under lister ut alle som er like
    if(resultat10.length > 0) {
        for (let person of resultat10) {
            console.log(`${person.fNavn} har interessene: ${søk10.join(", ")}`);
        }
    } else {
            console.log(`Ingen personer har interesse(ne): ${søk10.join(", ")}`);
    }
}
søkEtterInteresse2(["musikk", "koding", "Løping"]); // Må ha Array som input-parameter her med interessene. Nanvne til se som har interessene vises i konsollen

//////////////////////////////////////
// ---- Steg 7. Objekter - Trinn 2 ---
//////////////////////////////////////
// Funksjoner som tar imot og returnerer data

// Trinn 2 går gjennom:
// 1. Å lage funksjoner som tar objekter som argument – F.eks. function skrivUtPerson(person) { ... }
// 2. Å returnere nye objekter eller arrays fra funksjoner - F.eks. returnere alle personer med alder over 30.
// 3. Kombinere filter(), map(), og reduce() – For å gjøre databehandling mer effektiv og gjenbrukbar.
// 4. Skrive kode som kan gjenbrukes med forskjellige datasett - F.eks. en funksjon som filtrerer etter interesser uansett hvilket array av personer du gir inn.

// Oppgave 1: Funksjon som returnerer navn på personer over en viss alder fra array (objekter)
// Arrayet med personer
let personer5 = [
    {
        fNavn: "Siggen", 
        alder: 26
    },
    {
        fNavn: "Thomas",
        alder: 27
    },
    {
        fNavn: "Sara",
        alder: 35
    },
    {
        fNavn: "Seth",
        alder: 21
    }
]

function hentePersonerOverAlder(personer, alder) {
    let eldrePersoner = personer.filter(t => t.alder > alder) // Inneholder de som er eldre enn enn input-alderen.
    let navnPersoner = eldrePersoner.map(p => p.fNavn); // Inneholder navnene til de som har en viss alder.    
    return navnPersoner;    
}
let resultat11 = hentePersonerOverAlder(personer5, 31) // Tar inn et array og en alder som input-parameter
console.log(`Resultet (array personer5): ${resultat11}`)

console.log("") // Kun for linjeskift (lage et skille i consollen fra forrige oppgave)

// Oppgave 2: Hent personer over en viss alder som også har en spesifikk interesse
// Del 1 – Funksjon
// Lag en funksjon som:
// Tar imot tre parametere:
// en array av personer
// en minimumsalder (f.eks. 30)
// en interesse (f.eks. "musikk")
// Returnerer navnene på personer som:
// er eldre enn eller lik minimumsalder
// og har interessen i sin interesser-liste
let personer6 = [
    {
        fNavn: "Sara",
        alder: 36,
        interesser: ["løpe", "musiKk", "hest"]
    },
    {
        fNavn: "Thomas",
        alder: 27,
        interesser: ["trening", "musikk", "mat"]
    },
    {
        fNavn: "Siggen",
        alder: 26,
        interesser: ["kode", "løpe", "vin"]
    },
    {
        fNavn: "Sandra",
        alder: 32,
        interesser: ["tegne", "musikk", "sykle"]
    }
]
function finnePersonMedInteresse(personer, alder, interesse) {    
    console.log("Oppgave 2 (Trinn 2)");
    // Feilhåndtering:
    if (!Array.isArray(personer)) { // Sjekker først om input er et array, noe som er kravet i oppgaven her.
        console.log("Ikke oppgitt et Array som input.")
        return []; // Stopper scriptet fra å kjøre .filter()-koden nednefor.
    } else if (interesse.trim() === "") { // Sjekker om det er skrevet inn en interesse. 
        console.log("Skriv inn en interesse.")
        return []; // Stopper scriptet fra å kjøre .filter()-koden nednefor.
    } else if (typeof alder !== "number") { // Sjekker om alder er en int og ikke en string.
        console.log("Sriv inn et tall!")
        return []; // Stopper scriptet fra å kjøre .filter()-koden nednefor.
    } else if (alder <= 0) {
        console.log("Skriv inn et tall større enn null!")
        return []; // Stopper scriptet fra å kjøre .filter()-koden nednefor.
    } else {
        return personer.filter(t => t.alder > alder && t.interesser.some(i => i.toLowerCase().trim() === interesse.toLowerCase().replace(/\s+/g, ""))).map(p => p.fNavn);
    }
    // Filterer sånn at vi kun har de som er eldre enn input-alderen.    
    // filter() returnerer array med alle som er er eldre enn input-alder)
    // some() Sjekker om minst en av interessene er lik/matcher input-interessen.
    // map() Bruker denne til å hente ut nanvene fra resultatet (de som matcher med påde alder og interesse).
    // replace(/\s+/g, " ") - Hånderer mellomrom både, i starten, mellom bokstavene og på slutten av ordet.
    // trim() - Til forskjell, fjerner kun mellomrom før og etter ordet.
    // Håndterer store og små bokstaver
}
let resultat12 = finnePersonMedInteresse(personer6, 10, "   MUS  IKK  ");
console.log(`Resultat (array personer6): ${resultat12}`)

console.log("") // Kun for linjeskift (lage et skille i consollen fra forrige oppgave)

// Oppgave 3 – Filtrering og sortering
// - Du skal lage en funksjon som:
// - Tar inn:
// - Et array med personer (navn, alder, interesser)
// - En alder (minAlder)
// - En interesse (søkeInteresse)
// - Filtrerer kun de som er eldre enn minAlder
// - Sjekker at de har søkeInteresse
// - Sorterer resultatet etter alder, fra eldst til yngst
// - Returnerer en liste med kun navnene
let personer7 = [
    {
        fNavn: "Thomas",
        alder: 28,
        interesser: ["data", "musikk", "trening", "frimerker"]
    },
    {
        fNavn: "Seth",
        alder: 21,
        interesser: ["bil", "mat", "hoppe hoppetau", "golf"]
    },
    {
        fNavn: "Siggen",
        alder: 27,
        interesser: ["mat", "trening", "kode", "vin", "musikk"]
    },
    {
        fNavn: "Joey",
        alder: 25,
        interesser: ["gaming", "serier", "løpe", "mat", "bil"]
    },
    {
        fNavn: "Sara",
        alder: 32,
        interesser: ["musikk", "mat", "hoppe hoppetau", "kode"]
    }
]

console.log("Oppgave 3 (Trinn 2) personer13")

function filtrerOgSorter(person, alder, interesse) {
    if (!Array.isArray(person)) { // Sjekker om input er et array
        console.log("Input er ikke et array!");
        return[];
    } else if (interesse.trim() === "") { // Sjekker om det er skrevet inn noe (filterer bort mellomrom med trim)
        console.log("Ikke skrevet inn en interesse!")
        return[];
    } else if (typeof alder !== "number" || isNaN(alder) || alder < 0) { // isNaN koverterer fra string til int. 
        console.log("Ugyldig tall!")
        return[];
    } else {
        //let personer = person.filter(n => n.fNavn)
        //let gammelNok = person.filter(a => a.alder > alder)
        let matchInteresse = person.filter(i => i.interesser.some(i => i.toLowerCase().trim() === interesse.toLowerCase().trim())).sort((a, b) => b.alder - a.alder);
        let resultat = matchInteresse.map(a => `${a.fNavn} ${a.alder}`)
        // Her oppretter vi en teller som teller antall matcher vi finner i arryet. Om vi får 0 matcher, stopper scriptet.
        let count = 0; // Teller begynner på verdi 0
        for (let i = 0; i < matchInteresse.length; i++ ) { // Går gjennom arrayet (en etter en)                       
            count++; // Legger til 1 hver gang den går gjennom løkka -
        }
        if (count === 0){ // Om vi ikke fåri arrayet  noen match, får man melding om det.
            console.log("Fant ingen match i arrayet!")
            console.log(count) // Viser: 0
            return[];
        } else { // Får vi match i arrayet på input, går den inn her
            // console.log(count) // Sjekker hvor mange
            //console.log("--- Resultatet på linje: ---")
            //console.log(`${resultat.join(", ")}`)
            // --- Fremgangsmåte ---
            // Først finner vi navnene med .filter(), så finner vi de som har mach med interesse med .some() og deretter sorterer på alder .sort()
            // OBS: Når jeg bruker map sånn her: .map(a => a.fNavn) - så endrer man dette resultet fra array til string. Da må jeg går smatidig sortere på alder.
            // Her må jeg ike opprette en egen resultet-variabel, men mer oversiktlig for meg her (matchInteresse-variabelen blir så lang, uoversiktlig). 
            // Mao, jeg kunne her ha lagt på map etter dette: sort((a, b) => b.alder - a.alder).map(a => `${a.fNavn} ${a.alder}`)
            // Alternativ måte å vise resultatet på - Liste det opp under hverandre:            
            // Dropper løkka da jeg heller vil returnere liste og linje og da må jeg gjøre det i en "return" (en return per funksjon)
            // for (let a of matchInteresse) {
            //     console.log(`- ${a.fNavn} alder: ${a.alder}`)           
            // }
            // OBS: En funksjon kan bare returnere én verdi. Derfor må jeg gjøre om return til et objekt:
            // Under måe jeg da returnere både resultetet med (array med trenger) samt resultetet med for..of-løkka:
            return { // Setter return her da jeg lister ut resultatet på to forskjellige måter.   
                liste: resultat,             
                linje: matchInteresse.map(a => `- ${a.fNavn} alder: ${a.alder}`), // For å vise dette, må vi kalle på dette objektet og da sin "liste"                
            };
        }
    }
}
console.log("--- Resultatet på linje: ---")
let resultat13 = filtrerOgSorter(personer7, 4, "musikk");
console.log(resultat13.linje.join(", "));
console.log("--- Resultatet vi for-løkke: ---");
console.log(`${resultat13.liste.join("\n")}`);

console.log("") // Kun for linjeskift (lage et skille i consollen fra forrige oppgave)

// ----------------------------------------------
// Oppgave 3 – Utvidelse av "Filtrering og sortering"
// ---- Jeg lager hele oppgaven på nytt ----
// - Lag en funksjon som:
// - Tar inn et array med personer (slik du har gjort før).
// - Bruker både filter og map til å finne personer som matcher en gitt interesse og er eldre enn en gitt alder.
// - Sorterer resultatet etter alder (eldst først).
// --- Nytt krav ---:
//   Returner et objekt med tre ting:
//   - antall: hvor mange personer som matcher (tallet).
//   - linje: resultatet på én linje, separert med komma.
//   - liste: resultatet som en liste (én på hver linje).
console.log("Oppgave 3 (Trinn 2) - Utvidelse")
let personer8 = [
    {
        fNavn: "Thomas",
        alder: 27,
        interesser: ["mat", "musikk", "gaming", "trening"]
    },
    {
        fNavn: "Seth",
        alder: 21,
        interesser: ["bil", "mat", "hoppe hoppetau", "golf"]
    },
    {
        fNavn: "Siggen",
        alder: 28,
        interesser: ["mat", "trening", "kode", "vin", "musikk"]
    },
    {
        fNavn: "Joey",
        alder: 25,
        interesser: ["gaming", "serier", "løpe", "mat", "bil"]
    },
    {
        fNavn: "Sara",
        alder: 35,
        interesser: ["musikk", "mat", "hoppe hoppetau", "kode"]
    },
    {
        fNavn: "Arne",
        alder: 45,
        interesser: ["Musikk ", "bil", "fly", "skyting"]
    }
]
let per = "Prsoner";
function finnePersonerUtvidelse(person, alder, interesse) {
    // Feilhåndtering
    if (!Array.isArray(person)) {
        console.log("Input er ikke et array!")
        return{ linje: [], teller: 0 }; // Her må "linje" fortsatt returneres som array da vi spør om det helt nederst: ${resultat14.linje.join(", ")}
    } else if (typeof alder !== "number" || alder < 1) {
        console.log("Alder er ikke et tall!")
        return{ linje: [], teller: 0 };
    } else if (interesse.trim() === "") {
        console.log("Ikke skrevet inn en interesse!")
        return{ linje: [], teller: 0 };
    } else {
        let personer = person.filter(i => i.interesser.some(i => i.toLowerCase().trim() === interesse.trim().toLowerCase()) && i.alder > alder).sort((a, b) => b.alder - a.alder);
        let henteUt = personer.map(a => `${a.fNavn} ${a.alder}`)
        let count = 0; // Teller antal matcher som skal vises i resultetet.
        // Alternetiv måte å telle elemeter på (count2):
        //let count2 = henteUt.length;
        //console.log(count2)
        // Går gjennom arrayet med for..of-løkke for å telle antall matcher:
        for (let person of henteUt) {
            //console.log(`${henteUt} alder ${henteUt.alder}`)
            count++;
        }
        if (count === 0) {
            console.log(`Fant ingen personer med interesse "${interesse.trim()}" som er ${alder} år eller eldre!`)
            return { linje:[], teller: 0}; 
        } else {
            return {
                linje: henteUt,
                teller: count
            };
        }        
    }    
}
let resultat14 = finnePersonerUtvidelse(personer8, 1, "")
console.log(`Antall personer funnet: ${resultat14.teller}`)
console.log(`På en linje: ${resultat14.linje.join(", ")}`)
console.log(`Listet ut: \n${resultat14.linje.join("\n")}`)

console.log("") // Kun for linjeskift (lage et skille i consollen fra forrige oppgave)

// ----------------------------------------------
// Oppgave 4 – Gruppering av personer etter interesse

// Lag en funksjon grupperEtterInteresse(personer) som:
// - Tar inn et array med personer (slik du har laget tidligere, med fNavn, alder, interesser).
// - Går gjennom alle personer, og samler dem i grupper basert på interessene deres.
// - Returnerer et objekt der nøkkelen er interessen og verdien er en liste med navn.

console.log("Oppgave 4 (Trinn 2) - Gruppering av personer etter interesse")

let personer9 = [ // Array med opbjekter
    {
        fNavn: "Thomas",
        alder: 28,
        interesser: ["musikk"]
    },
    {
        fNavn: "siggen",
        alder: 27,
        interesser: ["vin", "musikk"]
    },
    {
        fNavn: "Seth",
        alder: 21,
        interesser: ["vin", "musikk", "mat"]
    }

]

function grupperEtterInteresse(personer) {
    //let henteData = personer.find(i => i.interesse);
    let grupper = {}; // Her oppretter vi et objekt som vi nedenfor skal fylle med alle interessene som "nøker" og navnene som "egenskapene".
    for (let person of personer) { // Henter all info fra objekt-arrayet
        // console.log(person);

        for (let interesse of person.interesser) {  // Her henter vi alle interessene i arrayet som vi skal legge inn i objektet.

            // hvis vi ikke har interessen fra før (dette blir nøklene i det nye objektet vi lager her), oppretter vi interessen som tom array
            if (!grupper[interesse]) {
                grupper[interesse] = []; // Oppretter alle nye interesser som arrays. Disse skal inneholde nanvene.
            }      
            // I Interessen (opretttet over, legger vi til personens navn som er oppført med denne interessen.     
            grupper[interesse].push(person.fNavn); // Her legger vi til navnet (egenskapen) i interessen (nøkkelen)
        }
    }
    return grupper;
}

let resultat15 = grupperEtterInteresse(personer9);
// Tre måter å liste ut dataene oversiktlig på
console.table(resultat15)
console.log(JSON.stringify(resultat15, null, 2))
for (let interesse in resultat15) {
    console.log(`${interesse}: ${resultat15[interesse].join(", ")}`);
}

// BARE EN TEST: Demonstasjon av det som skjer over, bare lettere tydleig å se(forstå)
let kjøretøy = "bil"; 
let gruppe1 = {}; // Tomt objekt
gruppe1[kjøretøy] = []; // Oppretter nøkkel "kjøretøy" i opbjekte og denne blir et array med alle ekenskapene som legges inn i etterkant (volvo og skoda)
gruppe1[kjøretøy].push("volvo") // Legger til en egenskap
gruppe1[kjøretøy].push("Skoda")
console.log(gruppe1)
console.log(JSON.stringify(gruppe1, null, 2))

// ----------------------------------------------
// Oppgave 4 - Gruppering av personer etter interesse
// PÅ NYTT - Kortere versjon - Med brukav reduce()

let personer11 = [ // Array med opbjekter
    {
        fNavn: "Thomas",
        alder: 27,
        interesser: ["bil", "musikk"]
    },
    {
        fNavn: "Siggen",
        alder: 35,
        interesser: ["vin", "musikk"]
    }
]

function grupperEtterInteresse2(personer) {
    
    return personer.reduce((grupper, person) => { // Blir som "akk, nå" - «akk» samler opp summen gjennom alle rudnene i løkka. «nå» blir neste verdi som legges til "akk".
        // Reduce bygger opp et objekt (grupper)
        // reduce() går gjennom hele arrayet én person av gangen.
        // grupper er akkumulatoren (bygger opp resultatet underveis).
        // person er elementet vi jobber med akkurat nå.
        // Helt til slutt returnerer vi hele grupper-objektet.
        person.interesser.forEach(interesse => { // Går gjennom alle interessene i "person" (personer11).
            // For hver person går vi gjennom alle interessene deres.
            // Hvis en person har f.eks. ["mat", "musikk"], så kjører denne blokken to ganger – én gang med "mat", og én gang med "musikk".
            if (!grupper[interesse]) { // Sjekker om interesse-nøklene finnes. 
                grupper[interesse] = []; // Om ikke interessene finnes, legges disse nøklene til "Grupper" ("bil", "musikk" og "vin") og den et tomt array.
            }   // Eks: grupper = { bil: [] }
            grupper[interesse].push(person.fNavn); // Legger inn alle egenskapene (altså navnene thomas og siggen) i interesse-nøklene (bil, musikk og vin).
        }); // Eks: grupper = { bil: ["Thomas"] }
        return grupper; // Returnerer hele gruppa med alle nøklene som ble opprettet og med alle nanvnen som inngår i dem.
    }, {}); // Siste/tredje parameter i reduce() som alltid er startverdien. Dvs. at "Grupper" starert som et tomt objekt: {}
    // Eks: return personer.reduce((grupper, person) => { ... }, {});
}

// Forklaring av første runde:
// Runde 1 (Thomas, interesser = ["bil", "musikk"]):
// Starter med {}
// Oppretter nøkkel "bil", legger til "Thomas"
// Oppretter nøkkel "musikk", legger til "Thomas"
// Etter runde 1:

let resultat16 = grupperEtterInteresse2(personer11);
console.log(resultat16)

// ----------------------------------------------
// Oppgave 5 – Tell antall personer per interesse
// Oppgavetekst:
// Nå har du en funksjon som grupperer personer etter interesse.
// Neste steg er å lage en funksjon som ikke bare lister navnene, 
// men også teller hvor mange personer som hører til hver interesse.
// 1. Funksjonen skal ta inn samme personer-array.
// 2. Den skal returnere et objekt der nøkkelen er interessen og verdien er antall personer som har den interessen (og ikke navnene).
// 3. Hvis vi har noe sånt som:

let personer17 = [
    {
        fNavn: "Thomas",
        interesse: ["musikk", "bil"]
    },
    {
        fNavn: "Siggen",
        interesse: ["vin", "musikk"]
    }
]

function grupperEtterInteresse3(personer) {
    personer.reduce((interesse, person) => {
        person.interesser.forEach(interesse => {
            if (!grupper[interesse])
        });
        
    }, {});
}


let resultat17 = grupperEtterInteresse3(personer17);
console.log(resultat17);