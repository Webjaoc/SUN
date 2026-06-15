const form = document.getElementById("form");
const dateInput = document.getElementById("today");
const result = document.getElementById("ablauf");
const resultLabel = document.getElementById("resultLabel");
const resultHint = document.getElementById("resultHint");

function getSelectedValue(name) {
    return document.querySelector(`input[name="${name}"]:checked`).value;
}

function formatDate(date) {
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    return `${day}.${month}.${date.getUTCFullYear()}`;
}

function updateResultText() {
    const days = getSelectedValue("duration");
    const isProduction = getSelectedValue("mode") === "production";

    resultLabel.textContent = isProduction
        ? "Berechnetes Produktionsdatum"
        : "Berechnetes Ablaufdatum";
    resultHint.textContent = `Ausgangsdatum ${isProduction ? "minus" : "plus"} ${days} Tage`;
}

function clearResult() {
    result.textContent = "Noch nicht berechnet";
    result.classList.add("is-empty");
}

document.addEventListener("DOMContentLoaded", () => {
    dateInput.value = new Date().toISOString().slice(0, 10);
    updateResultText();
});

document.querySelectorAll('input[name="duration"], input[name="mode"]').forEach((input) => {
    input.addEventListener("change", () => {
        updateResultText();
        clearResult();
    });
});

dateInput.addEventListener("change", clearResult);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!dateInput.value) {
        dateInput.focus();
        return;
    }

    const days = Number(getSelectedValue("duration"));
    const isProduction = getSelectedValue("mode") === "production";
    const [year, month, day] = dateInput.value.split("-").map(Number);
    const calculatedDate = new Date(Date.UTC(year, month - 1, day));

    calculatedDate.setUTCDate(calculatedDate.getUTCDate() + (isProduction ? -days : days));
    result.textContent = formatDate(calculatedDate);
    result.classList.remove("is-empty");
    updateResultText();
});
