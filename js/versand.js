let ErgebnisMit = document.getElementById('ergebnis_mit_pal');
let ErgebnisOhne = document.getElementById('ergebnis_ohne_pal');
let pal_1 = document.getElementById('palette_1');
let pal_2 = document.getElementById('palette_2');
let pal_3 = document.getElementById('palette_3');
let pal_4 = document.getElementById('palette_4');

function rechnen(){
    let p1 = parseFloat (pal_1.value) || 0;
    let p2 = parseFloat (pal_2.value) || 0;
    let p3 = parseFloat (pal_3.value) || 0;
    let p4 = parseFloat (pal_4.value) || 0;

    let totalMit = p1 + p2 + p3 + p4;
    ErgebnisMit.innerHTML = totalMit;

    let totalOhne = 
      Math.max(p1 - 20, 0) +
      Math.max(p2 - 20, 0) +
      Math.max(p3 - 20, 0) +
      Math.max(p4 - 20, 0);
    ErgebnisOhne.innerHTML = totalOhne;
}

[pal_1, pal_2, pal_3, pal_4].forEach(input => {
      input.addEventListener("input", rechnen);
    });
    