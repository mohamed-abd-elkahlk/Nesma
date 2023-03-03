//!All div !//
let welcomeText = document.querySelector(".welcome");
let homePage = document.querySelector(".home");
let header = document.getElementById("header");
let aboutDiv = document.getElementById("about-div");
let contact = document.querySelector(".contact");

let since = document.querySelector(".since");

let math = document.querySelector(".math");

let english = document.querySelector(".english");

//!All div !//
//?//////////////////////////////////////////////////////////////////////////////////
//!All Button !//
let logIn = document.getElementById("logIn");
let homeButton = document.getElementById("HomeButton");
let aboutButton = document.getElementById("about");
let sinceB = document.getElementById("sinceB");
let HomeB = document.querySelector(".Home");
let contactB = document.getElementById("contactB");

let mathB = document.getElementById("math");
let phyB = document.getElementById("phy");
let englishB = document.getElementById("english");
//!All Button !//

HomeB.onclick = function () {
  welcomeText.classList.add("d-none");
  homePage.classList.remove("d-none");
  homePage.style.animation = "abeer 1s linear";
};

homeButton.onclick = function () {
  header.classList.remove("d-none");
  aboutDiv.classList.add("d-none");
  contact.classList.add("d-none");
  since.classList.add("d-none");
  english.classList.add("d-none");
  math.classList.add("d-none");
  homePage.style.animation = "abeer 1s linear";
};

aboutButton.onclick = function () {
  header.classList.add("d-none");
  aboutDiv.classList.remove("d-none");
  contact.classList.add("d-none");
  since.classList.add("d-none");
  english.classList.add("d-none");
  math.classList.add("d-none");
  aboutDiv.style.animation = "abeer 1s linear";
};

contactB.onclick = function () {
  header.classList.add("d-none");
  aboutDiv.classList.add("d-none");
  contact.classList.remove("d-none");
  since.classList.add("d-none");
  english.classList.add("d-none");
  math.classList.add("d-none");
  contact.style.animation = "abeer 1s linear";
};
mathB.onclick = function () {
  header.classList.add("d-none");
  aboutDiv.classList.add("d-none");
  contact.classList.add("d-none");
  since.classList.add("d-none");
  english.classList.add("d-none");
  math.classList.remove("d-none");
  math.style.animation = "abeer 1s linear";
};

sinceB.onclick = function () {
  header.classList.add("d-none");
  aboutDiv.classList.add("d-none");
  contact.classList.add("d-none");
  since.classList.remove("d-none");
  english.classList.add("d-none");
  math.classList.add("d-none");
  since.style.animation = "abeer 1s linear";
};

englishB.onclick = function () {
  header.classList.add("d-none");
  aboutDiv.classList.add("d-none");
  contact.classList.add("d-none");
  since.classList.add("d-none");
  english.classList.remove("d-none");
  math.classList.add("d-none");
  english.style.animation = "abeer 1s linear";
};
