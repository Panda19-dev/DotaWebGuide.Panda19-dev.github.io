const mouseOverImage = document.querySelector(".mouse-over-image");

fetch("https://api.opendota.com/api/heroes")
  .then((response) => response.json())
  .then((data) => {
    console.dir(data);

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      let heroName = document.createElement("a");
      heroName.setAttribute("href", "./hero.html?heroid=" + (element.id - 1));
      heroName.classList.add("hero-name");
      heroName.addEventListener("mouseenter", onMouseEnterHeroName);
      heroName.addEventListener("mouseleave", onMouseLeaveHeroName);
      heroName.innerHTML = element.localized_name;
      document.querySelector(".hero_name").append(heroName);
    }

    /*
    for (let i = 0; i < array.length; i++) {
      const item = array[i];

      let div = document.createElement("div");
      div.innerHTML = `
            <span>${item.name}</span>
            <span>${item.status}</span>
        `;
      document.querySelector("#root").appendChild(div);
    }
    */
  });

function onMouseEnterHeroName(event) {
  let realName = event.target.innerHTML.split(" ").join("_").toLowerCase();
  mouseOverImage.setAttribute("src", "./images/heroes/" + realName + ".png");
  mouseOverImage.style.display = "block";
}

function onMouseLeaveHeroName(event) {
  mouseOverImage.style.display = "none";
  console.log("Mouse left " + event.target.innerHTML);
}
