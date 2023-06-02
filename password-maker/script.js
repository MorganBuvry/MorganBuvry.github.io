const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "?!/*-+.:$%";
const rangeValue = document.getElementById("password-length");
const passwordInput = document.getElementById("password-input");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner au moins un critère");
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordInput.value = password;

  passwordInput.select();
  navigator.clipboard.writeText(passwordInput.value);

  generateButton.textContent = "Copié ! ";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
