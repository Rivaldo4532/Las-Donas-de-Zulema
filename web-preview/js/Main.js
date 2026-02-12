function hideAllScreens() {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
}

function goToHome() {
    hideAllScreens();
    document.getElementById("home").classList.add("active");
}

function goToInfo() {
    hideAllScreens();
    document.getElementById("info").classList.add("active");
}

function goToGallery() {
    hideAllScreens();
    document.getElementById("gallery").classList.add("active");
}

function showMenu() {
    // Se mantiene en Home (Menú es parte del home)
}
