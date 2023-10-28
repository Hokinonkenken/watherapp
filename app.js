let gif = document.querySelector(".gif");
let clickButton = document.querySelector(".click-button");
const imagePaths = [
  "images/Welcome.gif", //0 - Array value 0
  "images/Cloudy.gif", //1 - Array value 1
  "images/Rainy.gif", //2 - Array value 2
  "images/Snowy.gif", //3 - Array value 3
  "images/Sunny.gif" //4 - Array value 4
];

gif.src = imagePaths[0];
clickButton.addEventListener("click", function () {
  let username = prompt("What's your name? Welcome to our Weather app!");
  alert("Hello There! " + username);
  let favWeather = prompt("What's your favorite type of weather?");
  if (favWeather === "") {
    alert("Please, enter a weather type!");
  } else if (favWeather === "Cloudy" || favWeather === "cloudy") {
    gif.src = imagePaths[1]; //Cloudy.gif
  } else if (favWeather === "Rainy" || favWeather === "rainy") {
    gif.src = imagePaths[2]; //Rainy.gif
  } else if (favWeather === "Snowy" || favWeather === "snowy") {
    gif.src = imagePaths[3]; //Snowy.gif
  } else if (favWeather === "Sunny" || favWeather === "sunny") {
    gif.src = imagePaths[4]; //Sunny.gif
  } else {
    alert("Sorry, we don't have that weather in our system right now.");
  }
});
