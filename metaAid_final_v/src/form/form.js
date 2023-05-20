//DOM
let fistName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let educationLevel = document.getElementById("education-level");
let major = document.getElementById("major");
let gpa = document.getElementById("gpa");
let address = document.getElementById("address");
let logoutBtn = document.querySelector(".logout");
let phone = document.getElementById("phone");
let fill = document.querySelector(".fill");
let formBtn = document.querySelector(".form-btn");
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

//submit btn function
formBtn.addEventListener("click", (e) => {
  //validtion
  if (
    fistName.value !== "" &&
    lastName.value !== "" &&
    educationLevel.value !== "" &&
    gpa.value !== "" &&
    address.value !== "" &&
    phone.value !== "" &&
    major.value !== ""
  ) {
    //flag
    currentUser.df = true;
    //to add value of current user(before was: null)
    currentUser.userInfo = {
      //object
      first_Name: fistName.value,
      last_Name: lastName.value,
      education_level: educationLevel.value,
      major: major.value,
      gpa: gpa.value,
      address: address.value,
      phone: phone.value,
    };
    //to update on users array of each user:
    const updateArr = array.map((ele) => {
      return ele.email === currentUser.email
        ? {
            ...ele, //just update on key of the elements
            df: true,
            userInfo: {
              //object
              first_Name: fistName.value,
              last_Name: lastName.value,
              education_level: educationLevel.value,
              major: major.value,
              gpa: gpa.value,
              address: address.value,
              phone: phone.value,
            },
          }
        : ele;
    });
    // console.log(updateArr);
    //local storage to send apdate on users array and current user
    localStorage.setItem("users", JSON.stringify(updateArr));

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    setTimeout(function () {
      window.location = "../landing.html";
    }, 100);
    e.preventDefault();
  } //if user doesn't fill all fields display :"please fill"
  else {
    fill.style.display = "block";
    e.preventDefault();
  }
});
