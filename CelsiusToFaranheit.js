function getCelciusToFaranheit(Celcius){
    var Faranheit = Celcius * (9/5) + 32;
    return Faranheit;
}

const Celcius = 20;
var Faranheit = getCelciusToFaranheit(Celcius);
console.log(Faranheit);