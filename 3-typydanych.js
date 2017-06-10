'use strict'

/*

Typ Liczbowy

*/

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);


/*Typ - łańcuch znaków-string*/


var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;


calkowitaWyplataStr = wyplataStr + " \"dodajemy\"  "+ premiaStr;

console.log(calkowitaWyplataStr);

/*przy dodawaniu typów gdu jeden element będzie stringiem, to js zmieni  wszystkie inne na stringi*/

/* przy dodawaniu typu liczbowe się sumują , a typy string wyświetla obok siebie bez spacji, doda nie liczbowe a ciąg znaków*/

var imieStudenta = " Michał "

console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
console.log(imieStudenta.trim());

/*komputer liczy od zera, czyli 0 =1*/

/*Typ-Logiczny-boolen*/
var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog){
	console.log("Jest SMOG");
}
else {
	console.log("Nie ma SMOGa ;)")
}
