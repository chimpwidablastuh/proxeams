// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }

// const JWT_TEAMS = getCookie("TSAUTHCOOKIE");

// console.log(tsAuthCookie);

// module.exports = JWT_TEAMS;
const puppeteer = require("puppeteer");

(async () => {
  // Lance une instance de navigateur Chromium
  const browser = await puppeteer.connect({
    browserURL: "http://localhost:9222",
    defaultViewport: null, // Assure-toi que la vue n'est pas limitée par une taille de fenêtre prédéfinie
  });

  // Ouvre un nouvel onglet dans le navigateur existant
  const page = await browser.newPage();

  // Accède à la page
  await page.goto("https://teams.microsoft.com", { waitUntil: "networkidle2" });

  // Tente de récupérer le cookie TSAUTHCOOKIE
  const cookies = await page.cookies();
  const tsAuthCookie = cookies.find((cookie) => cookie.name === "TSAUTHCOOKIE");

  if (tsAuthCookie) {
    console.log("TSAUTHCOOKIE:", tsAuthCookie.value);
  } else {
    console.log("TSAUTHCOOKIE non trouvé");
  }

  // Ferme le navigateur
  // await browser.close();
})();
