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

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-navigation');

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('active');
});

// Funktion til at tjekke om bruger er på mobil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Popup til mobilbrugere
window.addEventListener('load', () => {
    if(isMobile()) {
        const accept = confirm("Telefon registreret! Vi kan se, du er på mobiltelefon. Vil du skifte til telefon design?");
        if(accept) {
            document.body.classList.add('mobile-design');
        }
    }
});
