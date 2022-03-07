const status = "online";

fetch("https://api.opendota.com/api/status")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
