let userEmail = document.querySelector(".userEmail");
let userPassword = document.querySelector(".userPassword");
let signIn_btn = document.querySelector(".button1");
let signup_btn = document.querySelector(".sign-up");
let array = JSON.parse(localStorage.getItem("users"));
let error = document.querySelector(".error");

signIn_btn.addEventListener("click", (e) => {
  if (userEmail.value === "" || userPassword.value === "")
    return (error.innerText = `please enter the password & email`);

  let existsUser = array.find((user) =>
    user.email === userEmail.value && user.password === userPassword.value
     
  );
  if (existsUser) {
    console.log(existsUser);
    localStorage.setItem("currentUser", JSON.stringify(existsUser)); //edit to user name later
    window.location = "../landing.html";

    console.log("ok");
    e.preventDefault();
  } else {
    error.innerText = `Email or password is not correct`;
  }
});
signup_btn.addEventListener("click", () => {
  window.location = "signup.html";
});
