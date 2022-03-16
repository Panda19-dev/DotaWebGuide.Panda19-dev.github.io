fetch("https://api.opendota.com/api/status")
  .then((response) => response.json())
  .then((data) => {
    console.dir(data);

    let matchspan = document.createElement("span");
    matchspan.classList.add("text");
    let playerspan = document.createElement("span");
    playerspan.classList.add("text");
    let hourspan = document.createElement("span");
    hourspan.classList.add("text");
    let errorspan = document.createElement("span");
    errorspan.classList.add("text");
    let apispan = document.createElement("span");
    apispan.classList.add("text");

    let numberOfPlayers = document.createElement("h1");
    numberOfPlayers.innerHTML = data.user_players;
    playerspan.append(numberOfPlayers);
    document.querySelector(".numberofplayers").append(playerspan);

    let numberOfMatchesLastDay = document.createElement("h1");
    numberOfMatchesLastDay.innerHTML = data.matches_last_day;
    matchspan.append(numberOfMatchesLastDay);
    document.querySelector(".numberofmatcheslastday").append(matchspan);

    let numberOfMatchesLastHour = document.createElement("h1");
    numberOfMatchesLastHour.innerHTML = data.matches_last_hour;
    hourspan.append(numberOfMatchesLastHour);
    document.querySelector(".numberofmatcheslasthour").append(hourspan);

    let numberOfErrorsLastDay = document.createElement("h1");
    numberOfErrorsLastDay.innerHTML = data.error_last_day;
    errorspan.append(numberOfErrorsLastDay);
    document.querySelector(".numberoferrorslastday").append(errorspan);

    let numberOfApiHitsLastDay = document.createElement("h1");
    numberOfApiHitsLastDay.innerHTML = data.api_hits_last_day;
    apispan.append(numberOfApiHitsLastDay);
    document.querySelector(".numberofapihitslastday").append(apispan);
  });
