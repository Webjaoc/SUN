// Al cargar la página, establece la fecha actual en el input
document.addEventListener("DOMContentLoaded", () => {
    const todayInput = document.getElementById("today");
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    todayInput.value = `${year}-${month}-${day}`;
});
document.getElementById("rechnen").addEventListener("click", function () {
    const todayInput = document.getElementById("today").value;
    const originalSelected = document.getElementById("original").checked;
    const chocSelected = document.getElementById("choc").checked;
    const performSelected = document.getElementById("performance").checked;
    const ablaufInput = document.getElementById("ablauf");

    if (!todayInput) {
        alert("Bitte wählen Sie ein heutiges Datum aus.");
        return;
    }

    let daysToAdd;

    if (originalSelected) {
        daysToAdd = 75;
    } else if (chocSelected) {
        daysToAdd = 90;
    }else if (performSelected) {
        daysToAdd = 75;
    }  else {
        alert("Bitte wählen Sie eine Produktart aus (Original oder Chocolate).");
        return;
    }

    const todayDate = new Date(todayInput);
    todayDate.setDate(todayDate.getDate() + daysToAdd);

    const day = String(todayDate.getDate()).padStart(2, '0');
    const month = String(todayDate.getMonth() + 1).padStart(2, '0');
    const year = todayDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    ablaufInput.value = formattedDate;
});

