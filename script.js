function convert(){
    var input = document.getElementById("input").value;
    var currency = document.getElementById("currency").value;
    var dh;
    var usd;
    var eur;


    switch(currency){
        case "DH" :  eur = input * 0.09; usd = input * 0.097; dh = input * 1; break;
        case "USD" : eur = input * 0.93; usd = input * 1; dh = input * 10.30; break;
        case "EUR" :  eur = input * 1; usd = input * 1.08; dh = input * 11.12;break;
    }

    document.getElementById("eur").value = eur;
    document.getElementById("usd").value  = usd;
    document.getElementById("dh").value  = dh;
}