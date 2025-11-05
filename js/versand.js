let Ergebnis = document.getElementById('ergebnis');
let pal_1 = document.getElementById('palette_1');
let pal_2 = document.getElementById('palette_2');
let pal_3 = document.getElementById('palette_3');

function rechnen(){
    let p1 = parseFloat (pal_1.value) || 0;
    let p2 = parseFloat (pal_2.value) || 0;
    let p3 = parseFloat (pal_3.value) || 0;

    let total = p1 + p2 + p3;
    Ergebnis.innerHTML = total;
    
}

[pal_1, pal_2, pal_3].forEach(input => {
      input.addEventListener("input", rechnen);
    });
    