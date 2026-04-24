function darkmode() {
    document.querySelector("body").classList.toggle("dark-mode")
    document.querySelector("header").classList.toggle("dark-header")
    if(document.getElementById("darkmode-btn").value == "Sötét mód"){
        document.getElementById("darkmode-btn").value = "Világos mód"
        document.getElementById("darkmode-btn").style.backgroundColor = "var(--not-dark-background-color)"
        console.log("Sötét módra átállítva")
    } else {
        document.getElementById("darkmode-btn").value = "Sötét mód"
        document.getElementById("darkmode-btn").style.backgroundColor = "var(--dark-header-color)"
        console.log("Világos módra átállítva")
    }
}