const params = new URLSearchParams(window.location.search);
const heroID = params.get("heroid");

fetch("https://api.opendota.com/api/heroes/")
  .then((response) => response.json())
  .then((data) => {
    const element = data[heroID];
    console.log(element);

    let heroHeading = document.createElement("h2");
    heroHeading.innerHTML = element.localized_name;
    heroHeading.classList.add("hero-heading");
    document.querySelector("main").append(heroHeading);
  });
