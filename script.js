document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookieBanner");
  const accepted = localStorage.getItem("cookiesAccepted");

  if (!accepted) {
    banner.style.display = "flex";
  } else {
    banner.style.display = "none";
  }

  // Mobil tilpasning
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

    navLinks.forEach(link => {
      link.style.fontSize = "1.1rem";
    });
  }
});


// Acceptér cookies
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookieBanner").style.display = "none";
}

// Afvis cookies
function declineCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookieBanner").style.display = "none";
}
