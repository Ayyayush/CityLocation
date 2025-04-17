const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityNameDisplay = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(city) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=1a5247e742594a758f5102411251604&q=${city}&aqi=yes`
  );
  return await promise.json(); // API se JSON data return karega
}

button.addEventListener("click", async () => {
  const value = input.value; // user input le rahe
  const result = await getData(value); // API se data fetch kar rahe

  // HTML pe result print kar rahe
  cityNameDisplay.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  cityTime.innerText = `Local Time: ${result.location.localtime}`;
  cityTemp.innerText = result.current.temp_c;
  cityTime.innerText=result.location.localtime;
});
