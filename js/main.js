console.log("Ezt a honlapot Városi Áron Tamás megsegítésére Sepsei Barnabás alkotta meg. Minden egyes sor kód Sepsei Barnabás erkölcsi érdeme.");

// Téma betöltése
let savedTheme = localStorage.getItem("theme");
let savedText = localStorage.getItem("btn-txt");
let savedSzigno = localStorage.getItem("szigno");

if (!savedTheme) {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    savedTheme = systemPrefersDark ? "dark" : "light";
    savedText = systemPrefersDark ? "Világos mód" : "Sötét mód";
    savedSzigno = systemPrefersDark ? "block" : "none";

    localStorage.setItem("theme", savedTheme);
    localStorage.setItem("btn-txt", savedText);
    localStorage.setItem("szigno", savedSzigno);

} else if (savedTheme === "dark") {
    savedText = "Világos mód";
    savedSzigno = "none";
} else {
    savedText = "Sötét mód";
    savedSzigno = "block";
}
// Téma alkalmazása
document.body.classList.add(savedTheme);

// Gombok inicializálása
document.getElementById("darkmode-btn").value = savedText;
document.getElementById("telefon-darkmode-btn").value = savedText;
document.querySelectorAll(".szigno-fekete").forEach(e => e.style.display = savedSzigno);
document.querySelectorAll(".szigno-feher").forEach(e => e.style.display = (savedSzigno == "none") ? "block" : "none");

// Téma váltó függvény
function toggleTheme() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        localStorage.setItem("btn-txt", "Sötét mód");
        localStorage.setItem("szigno", "block");
        savedSzigno = "block";
        console.log(savedSzigno);

        document.getElementById("darkmode-btn").value = "Sötét mód";
        document.getElementById("telefon-darkmode-btn").value = "Sötét mód";
        document.querySelectorAll(".szigno-fekete").forEach(e => e.style.display = savedSzigno);
        console.log(document.querySelector(".szigno-fekete").style.display);
        document.querySelectorAll(".szigno-feher").forEach(e => e.style.display = (savedSzigno == "block") ? "none" : "block");
    } else {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("btn-txt", "Világos mód");
        localStorage.setItem("szigno", "none");
        savedSzigno = "none"
        console.log(savedSzigno);

        document.getElementById("darkmode-btn").value = "Világos mód";
        document.getElementById("telefon-darkmode-btn").value = "Világos mód";
        document.querySelectorAll(".szigno-fekete").forEach(e => e.style.display = savedSzigno);
        console.log(document.querySelector(".szigno-fekete").style.display);
        document.querySelectorAll(".szigno-feher").forEach(e => e.style.display = (savedSzigno == "block") ? "none" : "block");
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
