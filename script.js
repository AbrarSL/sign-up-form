const pwdElement = document.querySelector("#password");
const pwdConfElement = document.querySelector("#password_confirm");
const pwdLabel = document.querySelector("#pwd_label");

function checkPwd(event) {
  if (pwdElement.value === pwdConfElement.value) {
    pwdLabel.classList.remove("pwd-error");
    pwdElement.classList.remove("error");
    pwdConfElement.classList.remove("error");
  } else {
    pwdLabel.classList.add("pwd-error");
    pwdElement.classList.add("error");
    pwdConfElement.classList.add("error");
  }
}

pwdElement.addEventListener('input', checkPwd);
pwdConfElement.addEventListener('input', checkPwd);