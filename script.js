function copyContract() {

    const contract = document.getElementById("contractAddress").innerText.trim();

    navigator.clipboard.writeText(contract)
        .then(() => {
            alert("PKZ contract address copied!");
        })
        .catch(() => {
            alert("Unable to copy contract address.");
        });
}


function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "80px";
        menu.style.right = "5%";
        menu.style.background = "#003d1d";
        menu.style.padding = "25px";
        menu.style.gap = "20px";
    }

}
