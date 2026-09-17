/* =========================
PAGE LOADER
========================= */

window.addEventListener("load", function () {

const loader = document.getElementById("loader");

setTimeout(function () {
loader.classList.add("hide");
document.body.classList.add("loaded");
}, 500);

});

/* =========================
MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

navMenu.classList.toggle("active");

if (navMenu.classList.contains("active")) {
menuBtn.textContent = "×";
} else {
menuBtn.textContent = "☰";
  /* =========================
   ADMIN LOGIN
========================= */

function adminLogin() {
  const username = document.getElementById("adminUsername").value.trim();
  const password = document.getElementById("adminPassword").value;

  const message = document.getElementById("loginMessage");

  // DEMO LOGIN
  const correctUsername = "admin";
  const correctPassword = "alpha123";

  if (username === correctUsername && password === correctPassword) {
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";

    document.getElementById("totalMembers").textContent = "0";
    document.getElementById("activeMembers").textContent = "0";
    document.getElementById("todayAttendance").textContent = "0";
    document.getElementById("expiringMembers").textContent = "0";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } else {
    message.textContent = "Invalid Admin ID or Password.";
  }
}


/* =========================
   ADMIN LOGOUT
========================= */

function adminLogout() {
  document.getElementById("admin-dashboard").style.display = "none";
  document.getElementById("admin-login").style.display = "flex";

  document.getElementById("adminUsername").value = "";
  document.getElementById("adminPassword").value = "";
  document.getElementById("loginMessage").textContent = "";
}


/* =========================
   DEMO BUTTON MESSAGE
========================= */

function showDemoMessage() {
  alert("This feature will be connected to the gym database in the next phase.");
}
}

});

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

link.addEventListener("click", function () {

navMenu.classList.remove("active");

menuBtn.textContent = "☰";

});

});

/* =========================
COPYRIGHT YEAR
========================= */

document.getElementById("year").textContent =
new Date().getFullYear();

/* =========================
SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(
function (entries) {

  entries.forEach(function (entry) {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      revealObserver.unobserve(entry.target);

    }

  });

},
{
  threshold: 0.12
}

);

revealElements.forEach(function (element) {

revealObserver.observe(element);

});

/* =========================
GOAL SELECTOR
========================= */

const goalButtons =
document.querySelectorAll(".goal-btn");

const goalResult =
document.getElementById("goalResult");

const goalMessages = {

strength:
"Start with structured strength training and focus on progressive, consistent workouts.",

fitness:
"Start with balanced fitness sessions combining resistance training, movement and conditioning.",

training:
"Personal training can provide more individualized coaching based on your experience and goals."

};

goalButtons.forEach(function (button) {

button.addEventListener("click", function () {

goalButtons.forEach(function (btn) {
  btn.classList.remove("active");
});

button.classList.add("active");

const selectedGoal =
  button.getAttribute("data-goal");

goalResult.textContent =
  goalMessages[selectedGoal];

});

});

/* =========================
FAQ ACCORDION
========================= */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

question.addEventListener("click", function () {

const currentFaq =
  question.parentElement;

const isOpen =
  currentFaq.classList.contains("open");


document.querySelectorAll(".faq").forEach(function (faq) {

  faq.classList.remove("open");

  const answer =
    faq.querySelector(".faq-answer");

  answer.style.maxHeight = null;

});


if (!isOpen) {

  currentFaq.classList.add("open");

  const answer =
    currentFaq.querySelector(".faq-answer");

  answer.style.maxHeight =
    answer.scrollHeight + "px";

}

});

});

/* =========================
FREE TRIAL FORM
========================= */

const trialForm =
document.getElementById("trialForm");

const formMessage =
document.getElementById("formMessage");

trialForm.addEventListener("submit", function (event) {

event.preventDefault();

const name =
document.getElementById("name").value.trim();

const phone =
document.getElementById("phone").value.trim();

const goal =
document.getElementById("goal").value;

if (!name || !phone || !goal) {

formMessage.textContent =
  "Please complete all fields.";

return;

}

formMessage.textContent =
"Request received. The gym team can contact you shortly.";

trialForm.reset();

});

/* =========================
BACK TO TOP
========================= */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", function () {

if (window.scrollY > 500) {

topBtn.classList.add("show");

} else {

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click", function () {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});
