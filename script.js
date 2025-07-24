window.onload = () => {
    const banner = document.getElementById("cookieBanner");
    const accepted = localStorage.getItem("cookiesAccepted");

    if (!accepted) {
        banner.style.display = "flex";
    }
};

function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookieBanner").style.display = "none";
}

function declineCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    document.getElementById("cookieText").innerHTML =
        "Du har afvist cookies. <a href='cookie-policy.html'>Læs om dine muligheder her.</a>";
    document.getElementById("cookieBanner").style.display = "none";
}


window.onload = () => {
    // Tjekker om brugeragenten indikerer mobiltelefon
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        const header = document.querySelector("header");
        const logo = document.querySelector(".logo");
        const navUl = document.querySelector("nav ul");
        const navLinks = document.querySelectorAll("nav a");

        if (header) {
            header.style.flexDirection = "column";
            header.style.alignItems = "center";
            header.style.padding = "16px 20px";
            header.style.gap = "20px";
        }

        if (logo) {
            logo.style.fontSize = "1.5rem";
        }

        if (navUl) {
            navUl.style.flexDirection = "column";
            navUl.style.gap = "15px";
            navUl.style.alignItems = "center";
            navUl.style.width = "100%";
        }

        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.style.fontSize = "1.1rem";
            });
        }
    }
};
