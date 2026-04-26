const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
document.body.classList.add("dark");
} else {
document.body.classList.add("light");
}

// Váltás
document.getElementById("darkmode-btn").addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        document.getElementById("darkmode-btn").value = "Sötét mód";
    } else {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        document.getElementById("darkmode-btn").value = "Világos mód";
    }
});

document.getElementById("telefon-darkmode-btn").addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        document.getElementById("telefon-darkmode-btn").value = "Sötét mód";
    } else {
        document.body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        document.getElementById("telefon-darkmode-btn").value = "Világos mód";
    }
});

document.getElementById("telefon-menugomb").addEventListener("click", () => {
    if (document.getElementById("telefon-menu").style.display === "flex") {
        document.getElementById("telefon-menu").style.display = "none";
    } else {
        document.getElementById("telefon-menu").style.display = "flex";
    }
});