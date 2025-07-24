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
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('active');
});
