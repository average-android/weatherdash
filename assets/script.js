var apiKey ; "278f7c5fc519547f73f9996c475c3d92";


var citySearch = document.querySelector("#searchCity");
var citySearchDisplayEl = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");
var weatherCurrentEl = document.querySelector("#current");

function clock() {
    var timeEl = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#time").text("Local Time: " + timeEl);
    console.log(timeEl);
}
setInterval(clock, 1000);