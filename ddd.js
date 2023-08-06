const form = document.querySelector("#myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const results = document.querySelector("#results");

  const userdetail = `Name: ${name}\nEmail: ${email}`;

results.textContent = userdetail;
  
});
