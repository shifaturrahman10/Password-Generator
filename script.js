function generatePassword() {
  const length = document.getElementById("length").value;

  const upper = document.getElementById("upper").checked;
  const lower = document.getElementById("lower").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  const U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const L = "abcdefghijklmnopqrstuvwxyz";
  const N = "0123456789";
  const S = "!@#$%^&*()_+{}[]<>?/";

  let chars = "";

  if (upper) chars += U;
  if (lower) chars += L;
  if (numbers) chars += N;
  if (symbols) chars += S;

  if (chars === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("result").innerText = password;
}

function copyPassword() {
  let password = document.getElementById("result").innerText;

  if (!password || password === "Your password will appear here") {
    alert("Please generate a password first!");
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied!");
    })
    .catch(() => {
      alert("Copy failed!");
    });
}

