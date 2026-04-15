// Fecha actual automática
document.addEventListener("DOMContentLoaded", () => {
    const todayInput = document.getElementById("today");
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    todayInput.value = `${year}-${month}-${day}`;
});

// Cambiar texto del modo
const toggle = document.getElementById("modeToggle");
const label = document.getElementById("modeLabel");
const ablaufLabel = document.querySelector('.ablauf');

toggle.addEventListener("change", () => {
    label.textContent = toggle.checked ? "Produziert" : "Ablaufdatum";
    ablaufLabel.textContent = toggle.checked ? "Produktionsdatum" : "Ablaufdatum";

});

// Botón calcular
document.getElementById("rechnen").addEventListener("click", function () {
    const todayInput = document.getElementById("today").value;
    const originalSelected = document.getElementById("original").checked;
    const chocSelected = document.getElementById("choc").checked;
    const blackSelected = document.getElementById("black").checked;
    const performSelected = document.getElementById("performance").checked;

    const ablaufInput = document.getElementById("ablauf");

    if (!todayInput) {
        alert("Bitte wählen Sie ein Datum aus.");
        return;
    }

    let days;

    if (originalSelected || blackSelected || performSelected) {
        days = 75;
    } else if (chocSelected) {
        days = 90;
    } else {
        alert("Bitte wählen Sie eine Produktart aus.");
        return;
    }

    const baseDate = new Date(todayInput);

    // 🔥 AQUÍ ESTÁ EL SWITCH
    if (toggle.checked) {
        // PRODUCCIÓN (RESTAR)
        baseDate.setDate(baseDate.getDate() - days);
    } else {
        // CADUCIDAD (SUMAR)
        baseDate.setDate(baseDate.getDate() + days);
    }

    // Formato
    const day = String(baseDate.getDate()).padStart(2, '0');
    const month = String(baseDate.getMonth() + 1).padStart(2, '0');
    const year = baseDate.getFullYear();

    ablaufInput.value = `${day}.${month}.${year}`;
});