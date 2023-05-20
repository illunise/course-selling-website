document.addEventListener("DOMContentLoaded", function () {

  const checkbox = document.querySelector("#hide_checkbox");
  let gitLogo = document.getElementById("gitlogo");
  let footerLogo = document.getElementById("footerLogo");
  let topLogo = document.getElementById("topLogo");

  hide_checkbox.addEventListener("click", () => {
    const body = document.body;

    if (checkbox.checked) {
      body.classList.add("dark");
      body.classList.remove("light");
      gitLogo.src = "images/github-dark.png";
      footerLogo.src = "/images/logo.png";
      topLogo.src = "/images/logo.png";
      console.log("Dark Mode Active");
    } else {
      console.log("Light Mode Active");
      body.classList.remove("dark");
      body.classList.add("light");
      gitLogo.src = "images/github-light.png";
      footerLogo.src = "/images/logo_dark.png";
      topLogo.src = "/images/logo_dark.png";
    }
  });
});
