fetch("https://api.opendota.com/api/status")
  .then((response) => response.json())
  .then((data) => {
    console.dir(data);

    let mySpan = document.createElement("span");
    mySpan.classList.add("text");

    let numberOfPlayers = document.createElement("h1");
    numberOfPlayers.innerHTML = data.user_players;
    document.querySelector(".numberofplayers").append(numberOfPlayers);

    let numberOfMatchesLastDay = document.createElement("h1");
    numberOfMatchesLastDay.innerHTML = data.matches_last_day;
    mySpan.append(numberOfMatchesLastDay);
    document.querySelector(".numberofmatches").append(mySpan);

    let numberOfMatchesLastHour = document.createElement("h1");
    numberOfMatchesLastHour.innerHTML = data.matches_last_hour;
    document
      .querySelector(".numberofmatcheslasthour")
      .append(numberOfMatchesLastHour);

    let numberOfErrorsLastDay = document.createElement("h1");
    numberOfErrorsLastDay.innerHTML = data.error_last_day;
    document
      .querySelector(".numberoferrorslastday")
      .append(numberOfErrorsLastDay);

    let numberOfApiHitsLastDay = document.createElement("h1");
    numberOfApiHitsLastDay.innerHTML = data.api_hits_last_day;
    document
      .querySelector(".numberofapihitslastday")
      .append(numberOfApiHitsLastDay);
  });
