let firstName = document.getElementById("fisrt-name");
let lastName = document.getElementById("last-name");
let educationLevel = document.getElementById("education-level");
let major = document.getElementById("major");

let gpa = document.getElementById("gpa");

let address = document.getElementById("address");
let phone = document.getElementById("phone");

let techScore = document.getElementById("techScore");
let englishScore = document.getElementById("englishScore");
let logoutBtn = document.querySelector(".logout");
let techScoreStorege = localStorage.getItem("techScore");
let engScoreStorege = localStorage.getItem("englishScore");
let updateArrUserInfo = JSON.parse(localStorage.getItem("users"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//in every page // for header
//show current user name
let userName = document.querySelector(".user_name");
if (currentUser) {
  userName.classList.remove("hidden");
  userName.innerText = currentUser.userName;
}
//logout function
logoutBtn.addEventListener("click", () => {
  console.log(currentUser);

  window.location = "../signUp-login/login.html";
  localStorage.removeItem("currentUser");
});
//in every page

//
firstName.innerHTML += currentUser.userInfo.first_Name;

lastName.innerHTML += currentUser.userInfo.last_Name;

educationLevel.innerHTML += currentUser.userInfo.education_level;
major.innerHTML += currentUser.userInfo.major;
gpa.innerHTML += currentUser.userInfo.gpa;

address.innerHTML += currentUser.userInfo.address;

phone.innerHTML += currentUser.userInfo.phone;

englishScore.innerHTML += currentUser.englishScore + "/15";
techScore.innerHTML += currentUser.techScore + "/10";
