console.log("Ezt a honlapot Városi Áron Tamás megsegítésére Sepsei Barnabás alkotta meg. Minden egyes sor kód Sepsei Barnabás erkölcsi érdeme.");

// Téma betöltése
let savedTheme = localStorage.getItem("theme");
let savedText = localStorage.getItem("btn-txt");
let savedSzigno = localStorage.getItem("szigno");

if (!savedTheme) {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    savedTheme = systemPrefersDark ? "dark" : "light";
    savedText = systemPrefersDark ? "Világos mód" : "Sötét mód";
    savedSzigno = systemPrefersDark ? "none" : "block";

    localStorage.setItem("theme", savedTheme);
    localStorage.setItem("btn-txt", savedText);
    localStorage.setItem("szigno", savedSzigno);

} else if (savedTheme === "dark") {
    savedText = "Világos mód";
} else {
    savedText = "Sötét mód";
}
// Téma alkalmazása
document.body.classList.add(savedTheme);

// Gombok inicializálása
document.getElementById("darkmode-btn").value = savedText;
document.getElementById("telefon-darkmode-btn").value = savedText;
document.getElementById("szigno-fekete").style.display = savedSzigno;
document.getElementById("szigno-feher").style.display = (savedSzigno == "block") ? "none" : "block";

// Téma váltó függvény
function toggleTheme() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        localStorage.setItem("btn-txt", "Sötét mód");
        localStorage.setItem("szigno", "block");

        document.getElementById("darkmode-btn").value = "Sötét mód";
        document.getElementById("telefon-darkmode-btn").value = "Sötét mód";
        document.getElementById("szigno-fekete").style.display = "block";
        document.getElementById("szigno-feher").style.display = "none";
    } else {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("btn-txt", "Világos mód");
        localStorage.setItem("szigno", "none");

        document.getElementById("darkmode-btn").value = "Világos mód";
        document.getElementById("telefon-darkmode-btn").value = "Világos mód";
        document.getElementById("szigno-fekete").style.display = "block";
        document.getElementById("szigno-feher").style.display = "none";
    }
}

// Események
document.getElementById("darkmode-btn").addEventListener("click", toggleTheme);
document.getElementById("telefon-darkmode-btn").addEventListener("click", toggleTheme);

// Telefonos menü
document.getElementById("telefon-menugomb").addEventListener("click", () => {
    const menu = document.getElementById("telefon-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});
