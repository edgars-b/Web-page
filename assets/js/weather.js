const cities = {
    Riga: 'Rīga'
}

window.onload = () => {
  getData();
  setInterval(() => getData(), 120_000);
};

var getData = () =>
  fetch("inboxWeather.php")
    .then(response => response.json())
    .then(data => render(data))
    .catch(error => console.log(error));

var render = (data) => {
  document.querySelector("#city").innerHTML = cities[data.geoip.city] || data.geoip.city;
  document.querySelector("#temp").innerHTML = `${data.weather.currTemp} &#8451;`;
  document.querySelector("#otherWeather").innerHTML = `Wind: ${data.weather.windSpeed} m/s`;
};
