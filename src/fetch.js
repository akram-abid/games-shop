fetch("https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
