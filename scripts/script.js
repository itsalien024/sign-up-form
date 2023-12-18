let check = function() {

  let pswd1 = document.getElementById("password").value;
  let pswd2 = document.getElementById("confirmPassword").value;
  let mismatchContainer = document.querySelector("#password-mismatch")

  if ((pswd1 === null || pswd1 === '') && (pswd2 === null || pswd2 === '')) {
    mismatchContainer.textContent = ""
  }else if (pswd1 == pswd2) {
    mismatchContainer.textContent = "Passwords match!";
    mismatchContainer.style.color = 'green';
  } else if (pswd1 !== pswd2) {
    mismatchContainer.textContent = "Passwords do not match!"
    mismatchContainer.style.color = 'red';
  }
}
