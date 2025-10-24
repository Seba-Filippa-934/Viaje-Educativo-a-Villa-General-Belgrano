function muestra_oculta(id) {
    const div = document.getElementById(id);
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
}
