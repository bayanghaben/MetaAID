const ArrayOfQuestions = [
  {
    question: " Which operating system is developed by Apple Inc.?",
    optionA: "Windows",
    optionB: "macOS",
    optionC: " Linux",
    optionD: " Android++",
    answer: "B",
  },
  {
    question: " What is the purpose of CSS in web development?",

    optionA: "Define the structure of a webpage",
    optionB: "Style the appearance of a webpage",
    optionC: "Handle user interactions",
    optionD: "Manage server-side operations",
    answer: "B",
  },
  {
    question: " Which of the following is a popular cloud computing platform?",
    optionA: "Azure",
    optionB: "Salesforce",
    optionC: "Oracle",
    optionD: "Slack",
    answer: "A",
  },
  {
    question: " What does API stand for?",

    optionA: "Application Programming Interface",
    optionB: "Artificial Intelligence",
    optionC: "Advanced Programming Interface",
    optionD: "Automated Process Integration",

    answer: "A",
  },
  {
    question:
      " Which file format is commonly used for 3D models in computer graphics?",
    optionA: "JPEG",
    optionB: "PNG",
    optionC: "OBJ",
    optionD: "GIF",
    answer: "C",
  },
  {
    question: " What is the function of a firewall in computer networks?",

    optionA: "Encrypt data transmission",
    optionB: "Monitor network traffic",
    optionC: "Control access to a network",
    optionD: "Amplify network signals",

    answer: "C",
  },
  {
    question: " What is the primary purpose of HTML?",

    optionA: "Define the structure of a webpage",
    optionB: "Style the appearance of a webpage",
    optionC: "Handle user interactions",
    optionD: "Perform database operations",

    answer: "A",
  },
  {
    question:
      " Which of the following is a popular relational database management system?",
    optionA: "MySQL",
    optionB: "MongoDB",
    optionC: "PostgreSQL",
    optionD: "SQLite",
    answer: "A",
  },
  {
    question: "Which storage device uses flash memory to store data?",
    optionA: "Hard disk drive (HDD)",
    optionB: "Solid-state drive (SSD)",
    optionC: "Optical disc",
    optionD: "Magnetic tape",
    answer: "B",
  },
  {
    question: "What does VPN stand for?",

    optionA: "Very Personal Navigator",
    optionB: "Video Playback Network",
    optionC: "Virtual Private Network",
    optionD: "Voice over Protocol Network",

    answer: "C",
  },
  {
    question: " What is the default port number for HTTP connections?",
    optionA: "443",
    optionB: "80",
    optionC: "22",
    optionD: "8080",
    answer: "B",
  },
  {
    question: " Which protocol is used to send and receive emails?",
    optionA: " SMTP",
    optionB: "FTP",
    optionC: "HTTP",
    optionD: "SMTP",
    answer: "D",
  },
  {
    question: "What does CPU stand for?",

    optionA: "Central Processing Unit",
    optionB: " Computer Processing Unit",
    optionC: " Core Processing Unit",
    optionD: " Central Power Unit",

    answer: "A",
  },
  {
    question: "What does the acronym HTTP stand for?",
    optionA: "Hypertext Transfer Protocol",
    optionB: "-Hyperlink Transmission Procedure",
    optionC: "High-Tech Transfer Protocol",
    optionD: "Hosting and Testing Platform",
    answer: "A",
  },
  {
    question:
      " What is the primary purpose of a database management system (DBMS)?",

    optionA: "Data storage",
    optionB: "User authentication",
    optionC: "Network security",
    optionD: "Hardware optimization",

    answer: "A",
  },
  {
    question: " What is the primary purpose of an antivirus software?",
    optionA: "Enhancing computer performance",
    optionB: "Preventing unauthorized access",
    optionC: "Detecting and removing malware",
    optionD: "Managing network connections",
    answer: "C",
  },
  {
    question: " What is the purpose of a VPN (Virtual Private Network)?",
    optionA: "Filter network traffic",
    optionB: "Securely access a private network over the internet",
    optionC: "Accelerate internet speed",
    optionD: "Manage domain names",

    answer: "B",
  },
  {
    question: " Which of the following is an example of a NoSQL database?",
    optionA: "MongoDB",
    optionB: "MySQL",
    optionC: "Oracle",
    optionD: "SQLite",
    answer: "A",
  },
  {
    question: " What is the function of a router in computer networking?",

    optionA: "Connect multiple networks",
    optionB: "Amplify network signals",
    optionC: "Encrypt data transmission",
    optionD: "Monitor network traffic",

    answer: "A",
  },
  {
    question:
      " Which of the following is a popular programming language for web development?",
    optionA: "JavaScript",
    optionB: "C++",
    optionC: "Python",
    optionD: "Swift",
    answer: "A",
  },
  {
    question: " What is the purpose of a firewall in computer networks?",

    optionA: "Monitor network traffic",
    optionB: "Encrypt data transmission",
    optionC: "Control access to a network",
    optionD: "Amplify network signals",

    answer: "C",
  },
  {
    question: " What does the acronym IoT stand for?",
    optionA: "Internet of Technology",
    optionB: " Internet of Things",
    optionC: "Internet on Televisions",
    optionD: "Internet over Time",
    answer: "B",
  },
  {
    question: " What is the function of a DNS (Domain Name System) server?",

    optionA: "Translate domain names to IP addresses",
    optionB: "Encrypt data transmission",
    optionC: "Manage network security",
    optionD: "Handle user authentication",

    answer: "A",
  },
  {
    question: " Which of the following is a popular cloud storage service?",
    optionA: "Google Drive",
    optionB: "Dropbox",
    optionC: "OneDrive",
    optionD: "iCloud",
    answer: "A",
  },
  {
    question:
      " What is the purpose of version control software in software development?",

    optionA: "Track changes to source code",
    optionB: "Optimize program execution",
    optionC: "Handle database operations",
    optionD: "Manage user authentication",

    answer: "A",
  },
  {
    question: "What does the acronym AI stand for in the field of technology?",
    optionA: "Augmented Intelligence",
    optionB: "Advanced Integration",
    optionC: "Automated Innovation",
    optionD: "Artificial Intelligence",
    answer: "D",
  },
  {
    question:
      " What is the function of an IDE (Integrated Development Environment)?",

    optionA: "Provide tools for software development",
    optionB: "Manage network infrastructure",
    optionC: "Handle database operations",
    optionD: "Monitor system performance",
    answer: "A",
  },

  {
    question: " Which of the following is a popular mobile operating system?",
    optionA: "Android",
    optionB: "Windows",
    optionC: "iOS",
    optionD: "Linux",
    answer: "A",
  },

  {
    question:
      " What is the purpose of a CDN (Content Delivery Network) in web development?",

    optionA: "Encrypt data transmission",
    optionB: "Manage user authentication",
    optionC: "Handle database operations",
    optionD: "Improve website performance",
    answer: "D",
  },

  {
    question:
      " Which of the following is a widely used relational database management system?",
    optionA: "MySQL",
    optionB: "MongoDB",
    optionC: "SQLite",
    optionD: "Redis",
    answer: "A",
  },
];

let holdTest = document.querySelector(".test");
let holdQuestion = document.querySelector("#question");
let answer1 = document.querySelector("#option-one");
let answer2 = document.querySelector("#option-two");
let answer3 = document.querySelector("#option-three");
let answer4 = document.querySelector("#option-four");
let holderMin = document.querySelector(".min");
let holderSec = document.querySelector(".sec");
const holdAnswer = document.querySelectorAll(".answer");
let btn = document.getElementById("btn");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
let popupScore = document.querySelector(".popupScore");
let logoutBtn = document.querySelector(".logout");
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

let array = JSON.parse(localStorage.getItem("users"));

let score = 0;

//Generate 10 random question in new array.
const newArrayQuations = [];
const generate = function () {
  while (newArrayQuations.length < 10) {
    let index = Math.floor(Math.random() * ArrayOfQuestions.length);

    if (newArrayQuations.includes(ArrayOfQuestions[index])) {
      continue;
    }
    newArrayQuations.push(ArrayOfQuestions[index]);
  }
};
generate();

//Delete any previous checked
// const deselectAnswers = () => {
//   holdAnswer.map(answer => {
//   answer.checked = false;
//     return answer;
//   });
// };

//Delete any previous checked
const deselectAnswers = () => {
  holdAnswer.forEach((answer) => (answer.checked = false));
};

//get input user
let answer;
const getSelected = () => {
  holdAnswer.forEach((firstAnswer) => {
    if (firstAnswer.checked) answer = firstAnswer.id;
  });

  return answer;
};

//Timer 10 minute for all quiz
let min = 10;
let sec = 0;
const timer = setInterval(() => {
  if (min > 0 && sec == 0) {
    min -= 1;
    sec = 60;
  }
  sec--;

  if (min == 0 && sec < 0) {
    localStorage.setItem("techScore", score);
    currentUser.techFlag = true;
    currentUser.techScore = score;

    console.log(currentUser.techFlag);
    // let techFlag = currentUser.df;
    // Dflag = true;

    const updateArr = array.map((ele) => {
      return ele.email === currentUser.email
        ? { ...ele, techFlag: true, techScore: score }
        : ele;
    });
    // localStorage.setItem("Df", df);
    localStorage.setItem("users", JSON.stringify(updateArr));

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    popup.classList.add("active");
    popupScore.innerText = `Your Score is : ${score}`;

    closeBtn.addEventListener(
      "click",

      () => (window.location = "../landing.html")
    );

    return;
  }
  holderMin.innerText = min + ":";
  holderSec.innerText = sec.toString().padStart(2, "0");
}, 1000);

//next button -------
let currIdx = 0;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getSelected();
  //8
  if (!answer) return;
  if (currIdx == newArrayQuations.length - 2) e.target.innerText = "submit";
  if (answer === newArrayQuations[currIdx].answer) score++;

  if (currIdx === newArrayQuations.length - 1) {
    localStorage.setItem("techScore", score);

    currentUser.techFlag = true;
    currentUser.techScore = score;

    console.log(currentUser.techFlag);
    // let techFlag = currentUser.df;
    // Dflag = true;

    const updateArr = array.map((ele) => {
      return ele.email === currentUser.email
        ? { ...ele, techFlag: true, techScore: score }
        : ele;
    });
    // localStorage.setItem("Df", df);
    localStorage.setItem("users", JSON.stringify(updateArr));

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    popup.classList.add("active");
    popupScore.innerText = `Your Score is : ${score}`;
    clearInterval(timer);
    closeBtn.addEventListener(
      "click",
      () => (window.location = "../landing.html") //home
    );

    return;
  }

  deselectAnswers();
  currIdx++;
  loadQusetion();
  answer = "";
});

// Load new question
// let QusetionIndex = 0;
const loadQusetion = () => {
  deselectAnswers();
  const currentQuiz = newArrayQuations[currIdx];
  holdQuestion.innerText = `${currIdx + 1} . ${currentQuiz.question}`;
  answer1.innerText = currentQuiz.optionA;
  answer2.innerText = currentQuiz.optionB;
  answer3.innerText = currentQuiz.optionC;
  answer4.innerText = currentQuiz.optionD;
};
loadQusetion();

// let currentIdx=0;
// const nextbtn= btn.addEventListener(  "click",(e) =>{
//   const inputUser =getSelected();
//   currentIdx++;
//   if(currentIdx< newArrayQuations.length)
//   loadQusetion();
//   else{
//   ' <button>Submit</button>'

//   }
//   e.preventDefault();
// });
