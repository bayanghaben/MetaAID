let userEmail = document.querySelector(".userEmail");
let userPassword = document.querySelector(".userPassword");
let signIn_btn = document.querySelector(".button1");
let signup_btn = document.querySelector(".sign-up");
let array = JSON.parse(localStorage.getItem("users"));
let error = document.querySelector(".error");
//if empty input in log in warn: `please enter the password & email`
signIn_btn.addEventListener("click", (e) => {
  if (userEmail.value === "" || userPassword.value === "")
    return (error.innerText = `please enter the password & email`);
  //if user exist and email match the password
  let existsUser = array.find(
    (user) =>
      user.email === userEmail.value && user.password === userPassword.value
  );
  if (existsUser) {
    //local storage of current user , currentUser is the key of: existUser
    localStorage.setItem("currentUser", JSON.stringify(existsUser));
    window.location = "../landing.html";
    e.preventDefault();
  }
  //if user not exist or email does not match password
  else {
    error.innerText = `Email or password is not correct`;
  }
});
//dont have an accout?
signup_btn.addEventListener("click", () => {
  window.location = "signup.html";
});
