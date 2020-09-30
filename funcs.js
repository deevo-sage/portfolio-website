// contains custom made functions 

document.getElementById("navicon").onclick = function () {
    if (this.innerText == "☰") {
        this.innerHTML = "&#x2573;";
        document.getElementById("navmodal").classList.remove("navr");
        document.getElementById("navmodal").classList.add("navi")
    }
    else {
        this.innerHTML = "&#9776;";
        document.getElementById("navmodal").classList.remove("navi");
        document.getElementById("navmodal").classList.add("navr");
    }
}