import { englishPool } from "./engQuestion.js";

const question = document.querySelector(".question");
const options = document.querySelectorAll(".option"); //for get answer
const nextBtn = document.querySelector("#nextBtn");
const labels = document.querySelectorAll(".label");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".closeBtn");
let logoutBtn = document.querySelector(".logout");
let popupScore = document.querySelector(".popupScore");
let array = JSON.parse(localStorage.getItem("users"));
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
// //in every page

let answer;
let englishScore = 0;
let currIdx = 0;
//generate 15/30 random Question
let engQuestions = [];

while (engQuestions.length < 15) {
  let idx = Math.floor(Math.random() * englishPool.length);
  if (engQuestions.includes(englishPool[idx])) continue;

  engQuestions.push(englishPool[idx]);
}

//get answer from user
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    answer = e.target.nextElementSibling.innerText;
    //return the answer
  });
});

//Next button
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!answer) return; //must answer to next question
  //currIdx == newArrayQuations.length - 2: when click on the next of the before the last question, change next to submit on the last question
  if (currIdx == engQuestions.length - 2) e.target.innerText = "submit"; //e.target to refer to the element in the eventlistener
  if (answer === engQuestions[currIdx].answer) englishScore++; //if answer true increase score

  // current index[9]=the tenth question
  if (currIdx === engQuestions.length - 1) {
    //update local storage
    localStorage.setItem("englishScore", englishScore);
    currentUser.englishFlag = true;
    currentUser.englishScore = englishScore;

    console.log(currentUser.englishFlag);
    //update local storage updateArr

    const updateArr = array.map((ele) => {
      return ele.email === currentUser.email
        ? { ...ele, englishFlag: true, englishScore: englishScore }
        : ele;
    });

    localStorage.setItem("users", JSON.stringify(updateArr));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    //when submit show popup score

    popup.classList.add("active");
    popupScore.innerText = `Your Score is : ${englishScore}`;
    clearInterval(counter);
    closeBtn.addEventListener(
      "click",
      () => (window.location = "../landing.html") //home
    );

    return;
  }

  reset();
  currIdx++;
  load();
});
// Load new question
const load = () => {
  question.innerText = `${currIdx + 1}. ${engQuestions[currIdx].question}`;
  labels.forEach((label, index) => {
    label.innerText = engQuestions[currIdx].options[index];
  });
};

load();

const reset = () => {
  options.forEach((option) => {
    option.checked = false;
  });
  answer = "";
};

//timer
let min = 20;
let sec = 0;
const minHolder = document.querySelector(".minHolder");
const secHolder = document.querySelector(".secHolder");

const timer = () => {
  if (sec == 0 && min > 0) {
    min--;
    sec = 60;
    return;
  }
  sec--;
  if (sec < 0 && min == 0) {
    clearInterval(counter);

    localStorage.setItem("englishScore", englishScore);
    //change and update on flag & score when time over
    currentUser.englishFlag = true;
    currentUser.englishScore = englishScore;
    const updateArr = array.map((ele) => {
      return ele.email === currentUser.email
        ? { ...ele, englishFlag: true, englishScore: englishScore }
        : ele;
    });

    localStorage.setItem("users", JSON.stringify(updateArr));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    //Show Score pop up when time Over!
    popup.classList.add("active");
    popupScore.innerText = `Your Score is : ${englishScore}`;
    //close btn of popup
    closeBtn.addEventListener(
      "click",
      () => (window.location = "../landing.html")
    );
    return;
  }
  minHolder.innerText = min + ":";
  secHolder.innerText = sec.toString().padStart(2, "0");
};

timer();

const counter = setInterval(timer, 1000);

setTimeout(() => {
  window.location = "../landing.html";
}, 20 * 60 * 1000);
