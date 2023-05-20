let userName = document.querySelector("#firstName");
let LastName = document.querySelector("#lastName");
let email = document.querySelector("#Email");
let password = document.querySelector("#password");
let confPassword = document.querySelector("#confirmPassword");

let signUp_btn = document.querySelector(".signupBtn");
let alreadyHaveAcc = document.querySelector(".alreadyHaveAcc");

let userNameVal = userName.value;
let error = document.querySelector(".error");

signUp_btn.addEventListener("click", (e) => {
  if (
    userName.value == "" ||
    LastName.value == "" ||
    email.value == "" ||
    password.value == ""
  )
    return (error.innerText = `* please fill all inputs`);

  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    return (error.innerText = "* Please enter a valid email");

  if (password.value.length < 8)
    return (error.innerText = `* Your password must have at least 8 char`);

  if (password.value !== confPassword.value)
    return (error.innerText = `* Your password is not match the confirm password`);

  let usersArr = JSON.parse(localStorage.getItem("users")) || [];
  let user = {
    userName: userName.value,
    LastName: LastName.value,
    email: email.value,
    password: password.value,
    df: false,
    techFlag: false,
    englishFlag: false,
    userInfo: {
      //object
      first_Name: "",
      last_Name: null,
      education_level: null,
      major: null,
      gpa: null,
      address: null,
      phone: null,
    },
    englishScore: null,
    techScore: null,
  };

  const isExist = usersArr.find((ele) => ele.email === user.email);
  if (isExist) return (error.innerText = `Email is already exist`);

  usersArr.push(user);

  localStorage.setItem("users", JSON.stringify(usersArr));

  // setTimeout(function () {
  //   window.location = "../landing.html";
  // }
  setTimeout(() => {
    //window.location;
    window.location = "login.html";
  }, 100);

  e.preventDefault();
});
alreadyHaveAcc.addEventListener("click", () => {
  setTimeout(() => {
    //window.location;
    window.location = "login.html";
  }, 100);
});
