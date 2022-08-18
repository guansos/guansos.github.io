function calcular() {
    var adultosRange = document.getElementById("adultosRange");
    var limpiezasAnualesRange = document.getElementById("limpiezasAnualesRange");
    var labelImporteMensual = document.getElementById("importeMensual");
    var labelImporteAnual = document.getElementById("importeAnual");
    var importeTotal = adultosRange.value * 1000 + limpiezasAnualesRange.value * 337;

    if (adultosRange.value === "0") {
        importeTotal = 0;
    }

    labelImporteMensual.innerText = importeTotal;
    labelImporteAnual.innerText = importeTotal * 10;
    
}

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        contratar();
    }
});

function contratar() {
    //window.location.href = "/contratar.html";
    location.href='contratar.html';
}