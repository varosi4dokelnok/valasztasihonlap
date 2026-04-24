function darkmode() {
    document.querySelector("body").classList.toggle("dark-mode")
    document.querySelector("header").classList.toggle("dark-header")
    if(document.getElementById("darkmode-btn").value == "Sötét mód"){
        document.getElementById("darkmode-btn").value = "Világos mód"
        console.log("Sötét módra átállítva")
    } else {
        document.getElementById("darkmode-btn").value = "Sötét mód"
        console.log("Világos módra átállítva")
    }
}