function topla() {
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    var sonuc = sayi1 + sayi2;
    document.getElementById("sonuc").innerHTML = sonuc;
}

function cıkar() {
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    var sonuc = sayi1 - sayi2;
    document.getElementById("sonuc").innerHTML = sonuc;
}

function carp() {
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    var sonuc = sayi1 * sayi2;
    document.getElementById("sonuc").innerHTML = sonuc;
}

function bol() {
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    if (sayi2 !== 0) {
        var sonuc = sayi1 / sayi2;
    } else {
        var sonuc = "Hata! Sıfıra bölme yapılamaz.";
    }
    document.getElementById("sonuc").innerHTML = sonuc;
}
