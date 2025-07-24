window.onload = () => {
    const banner = document.getElementById("cookieBanner");
    const accepted = localStorage.getItem("cookiesAccepted");

    if (!accepted) {
        banner.style.display = "flex";
    }
};

function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookieText").innerHTML =
        "Du har tilladt cookies – tak! <a href='cookie-policy.html'>Læs mere her.</a>";
    setTimeout(() => document.getElementById("cookieBanner").style.display = "none", 3000);
}

function declineCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    document.getElementById("cookieText").innerHTML =
        "Du har afvist cookies. <a href='cookie-policy.html'>Læs om dine muligheder her.</a>";
    setTimeout(() => document.getElementById("cookieBanner").style.display = "none", 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    // Find knap og navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-navigation');

    // Mobil-tjek funktion
    function isMobile() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Popup hvis mobil og spørg om design-skift
    if (isMobile()) {
        if(confirm("Telefon registeret, vi kan se du er på mobiltelefon. Vil du skifte til telefon design?")) {
            document.body.classList.add("mobile-design");
        }
    }

    // Toggle menu ved klik på knap
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('active');
    });
});
