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
    setTimeout(() => {
        document.getElementById("cookieBanner").style.display = "none";
    }, 3000);
}

function declineCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    document.getElementById("cookieText").innerHTML =
        "Du har afvist cookies. <a href='cookie-policy.html'>Læs om dine muligheder her.</a>";
    setTimeout(() => {
        document.getElementById("cookieBanner").style.display = "none";
    }, 3000);
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-navigation');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('active');
    });
}

// Udvidet funktion til at tjekke mobil og tablet (inkl. iPad i nyere iOS versioner)
function isMobileOrTablet() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    // iPadOS 13+ ændrer userAgent til Mac, så tjek også touch-enheder
    if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
        return true; // iPad på iOS 13+
    }

    // Almindelig mobile/tabs userAgents
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}

// Popup til mobil- og tabletbrugere
window.addEventListener('load', () => {
    if (isMobileOrTablet()) {
        const accept = confirm("Telefon eller tablet registreret! Vil du skifte til mobil/tablet design?");
        if (accept) {
            document.body.classList.add('mobile-design');
        }
    }
});
