//DOM
let userName = document.querySelector("#firstName");
let LastName = document.querySelector("#lastName");
let email = document.querySelector("#Email");
let password = document.querySelector("#password");
let confPassword = document.querySelector("#confirmPassword");
let signUp_btn = document.querySelector(".signupBtn");
let alreadyHaveAcc = document.querySelector(".alreadyHaveAcc");
let userNameVal = userName.value;
let error = document.querySelector(".error");
//Sign up button
signUp_btn.addEventListener("click", (e) => {
  if (
    //if one input is empty warn: `* please fill all inputs`
    userName.value == "" ||
    LastName.value == "" ||
    email.value == "" ||
    password.value == ""
  )
    return (error.innerText = `* please fill all inputs`);

  //Email & password validation:
  //email must :text345 @text.text
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    return (error.innerText = "* Please enter a valid email");
  //password must be => than 8 characters
  if (password.value.length < 8)
    return (error.innerText = `* Your password must have at least 8 char`);
  //passoward = confirmed password?
  if (password.value !== confPassword.value)
    return (error.innerText = `* Your password is not match the confirm password`);

  //local storage of Users
  let usersArr = JSON.parse(localStorage.getItem("users")) || [];
  //user object
  let user = {
    userName: userName.value,
    LastName: LastName.value,
    email: email.value,
    password: password.value,
    //flags
    df: false,
    techFlag: false,
    englishFlag: false,
    //user info From Form page
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
    // to save user score
    englishScore: null,
    techScore: null,
  };
  //if user already signed up
  const isExist = usersArr.find((ele) => ele.email === user.email);
  if (isExist) return (error.innerText = `Email is already exist`);
  //save user object in usersArray
  usersArr.push(user);
  localStorage.setItem("users", JSON.stringify(usersArr));

  //after sign up move to login page
  setTimeout(() => {
    window.location = "login.html";
  }, 100);

  e.preventDefault();
});

//alreadyHaveAccount btn
alreadyHaveAcc.addEventListener("click", () => {
  setTimeout(() => {
    window.location = "login.html";
  }, 100);
});
