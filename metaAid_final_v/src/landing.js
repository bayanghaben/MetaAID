"use strict";
let startApplication = document.querySelector(".start_application_btn");
let progressStep1 = document.querySelector(".step-1");
let progressStep2 = document.querySelector(".step-2");
let progressStep3 = document.querySelector(".step-3");
let applicantForm = document.querySelector(".applicant--form");
let englishTest = document.querySelector(".english--test");
let technicalTest = document.querySelector(".technical--test");
let submitbtn = document.querySelector(".submit__btn");
let bullets = [...document.querySelectorAll(".bullets")];
let df = localStorage.getItem("Df");
let techFlag = localStorage.getItem("techFlag");
let englishFlag = localStorage.getItem("englishFlag");
let logoutBtn = document.querySelector(".logout");
//js for header logout btn
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//show current user name
let userName = document.querySelector(".user_name");
if (currentUser) {
  userName.classList.remove("hidden");
  userName.innerText = currentUser.userName;
}
//logout
logoutBtn.addEventListener("click", () => {
  console.log(currentUser);

  window.location = "signUp-login/login.html";
  localStorage.removeItem("currentUser");

  // console.log(currentUserEmail);
});
// console.log(techFlag);
const MAX_STEPS = 3;
let currentStep = 1;

submitbtn.addEventListener("click", () => {
  window.location = "result/result.html";
  //  e.preventDefault();
});
applicantForm.addEventListener("click", () => {
  window.location = "form/form.html";
});
englishTest.addEventListener("click", () => {
  window.location = "englishTestffff/engTest.html";
});
technicalTest.addEventListener("click", () => {
  window.location = "TechnicalTestffff/techTest.html";
});

if (currentUser.df === true) {
  console.log(df);
  bullets[currentStep - 1].classList.add("completed");
  currentStep += 1;
  applicantForm.classList.add("completed");
  applicantForm.disabled = true;
}
if (currentUser.techFlag === true) {
  // console.log(techFlag);
  bullets[currentStep - 1].classList.add("completed");
  currentStep += 1;
  technicalTest.classList.add("completed");
  technicalTest.disabled = true;
}
if (currentUser.englishFlag === true) {
  console.log(englishFlag);
  bullets[currentStep - 1].classList.add("completed");
  currentStep += 1;
  englishTest.classList.add("completed");
  englishTest.disabled = true;
}
if (
  currentUser.df === true &&
  currentUser.techFlag === true &&
  currentUser.englishFlag === true
) {
  submitbtn.disabled = false;
  submitbtn.style.backgroundColor = "#fcc822";
  submitbtn.style.color = "#ffff";
} else {
  submitbtn.disabled = true;
}

console.log(currentUser.df);
