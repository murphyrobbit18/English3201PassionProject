function checkPswrd() {
  var confirmPassword = "Frank";
  var password = document.getElementById("pswrd").value;
  if (password == confirmPassword) {
    window.location =
      "SecretPage.html";
  } else {
    alert(
      "The password that you have entered does not match the one use to enter our system. This discrepancy will be reported to the administrators for further investigation."
    );
  }
}