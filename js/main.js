// Téma betöltése
let savedTheme = localStorage.getItem("theme");
let savedText = localStorage.getItem("btn-txt");

// Ha nincs mentve semmi, alapértelmezés:
if (!savedTheme) {
    savedTheme = "light";
    savedText = "Sötét mód";
    localStorage.setItem("theme", "light");
    localStorage.setItem("btn-txt", "Sötét mód");
} else if (savedTheme == "dark") {
    savedText = "Világos mód";
} else {
    savedText = "Sötét mód";
}

// Téma alkalmazása
document.body.classList.add(savedTheme);

// Gombok inicializálása
document.getElementById("darkmode-btn").value = savedText;
document.getElementById("telefon-darkmode-btn").value = savedText;

// Téma váltó függvény
function toggleTheme() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        localStorage.setItem("btn-txt", "Sötét mód");

        document.getElementById("darkmode-btn").value = "Sötét mód";
        document.getElementById("telefon-darkmode-btn").value = "Sötét mód";
    } else {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("btn-txt", "Világos mód");

        document.getElementById("darkmode-btn").value = "Világos mód";
        document.getElementById("telefon-darkmode-btn").value = "Világos mód";
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
