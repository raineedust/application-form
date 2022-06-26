function pwdValidation() {
  if (
    document.querySelector("#pwd").value ==
    document.querySelector("#confirmPwd").value
  ) {
    document.querySelector("#pwd").style.borderColor = "green";
    document.querySelector("#confirmPwd").style.borderColor = "green";
  } else {
    document.querySelector("#confirmPwd").style.borderColor = "red";
  }
}
