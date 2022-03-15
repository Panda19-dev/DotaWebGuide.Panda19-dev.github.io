const params = new URLSearchParams(window.location.search);
const heroID = params.get("heroid");

fetch("https://api.opendota.com/api/heroes/")
  .then((response) => response.json())
  .then((data) => {
    const element = data.find((hero) => hero.id == heroID);
    console.log(element);

    let heroHeading = document.createElement("h2");
    heroHeading.innerHTML = element.localized_name;
    heroHeading.classList.add("hero-heading");
    document.querySelector("main").append(heroHeading);

    let heroLegs = document.createElement("p");
    heroLegs.innerHTML = element.legs;
    heroLegs.classList.add("hero-legs");
    document.querySelector("main").append(heroLegs);

    let heroAttackType = document.createElement("p");
    heroAttackType.innerHTML = element.attack_type;
    heroAttackType.classList.add("hero-attack-type");
    document.querySelector("main").append(heroAttackType);

    let heroPrimaryAttribute = document.createElement("p");
    heroPrimaryAttribute.innerHTML = element.primary_attr;
    heroPrimaryAttribute.classList.add("hero-primary-attribute");
    document.querySelector("main").append(heroPrimaryAttribute);

    if (heroPrimaryAttribute == "str") {
    }
    if (heroPrimaryAttribute == "int") {
    }
    if (heroPrimaryAttribute == "agi") {
    }

    let heroRoles = document.createElement("p");
    heroRoles.innerHTML = element.roles;
    heroRoles.classList.add("hero-roles");
    document.querySelector("main").append(heroRoles);
  });
