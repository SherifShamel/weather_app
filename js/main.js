// try {
//     let x = 20;
//     console.log(x);
//     throw new Error("Error2")

// } catch (e) {
//     console.log(e);
// }

// var myRequest = new XMLHttpRequest();

// myRequest.open("GET", "https://fakestoreapi.com/products");

// myRequest.send()

// myRequest.addEventListener('load', function () {
//     console.log(JSON.parse(myRequest.response));

//     document.querySelector('img').setAttribute("src", `${JSON.parse(myRequest.response)[1].image}`)
//     document.querySelector('h1').innerHTML = `${JSON.parse(myRequest.response)[1].title}`
// })

//promises


// var getPizza = new Promise(function (resolve, fail) {
//     var result = false;

//     if (result == false) {
//         resolve("Data is Correct!!")
//     } else {
//         fail("Data is not correct you mother father")
//     }
// })

// getPizza.then(function (msg) {
//     console.log(msg);
// }).catch(function (msg) {
//     console.log(msg);
// }).finally(function () {
//     console.log("finally");
// })


// var pizza = new Promise(function (resolve, fail) {
//     var isPizza = true;

//     if (isPizza) {
//         resolve("Done")
//         console.log("Done");
//     } else {
//         fail("Fail")
//     }
// })

// function burger() {
//     new Promise(function (resolve, fail) {
//         console.log("Burger");
//         resolve();
//     })
// }

// pizza.then(function (msg) {
//     console.log(msg);

// }).catch(function (msg) {
//     console.log(msg);
// })

//promise part 4 video 6

// pizza.then(burger).catch(function (msg) {
//     console.log(msg);

// })

// var myRequest = new XMLHttpRequest()
// var cityName;
// var cityTemp;
// var selectedCity = document.querySelector("input")
// var myText = document.querySelector(".my_text")
// selectedCity.addEventListener("input", function () {
//     // console.log(selectedCity.value);
// })

// myRequest.open("GET", `http://api.weatherapi.com/v1/current.json?key=c9fc97bab5b24d71b2a113107252806&q=alex`)
// myRequest.send();

// myRequest.addEventListener('load', function () {
//     cityName = JSON.parse(myRequest.response).location.name;
//     cityTemp = JSON.parse(myRequest.response).current.temp_c;
//     myText = JSON.parse(myRequest.response).current.condition.text
//     console.log(myText);

//     document.querySelector("#city_name").innerHTML = cityName
//     document.querySelector("#city_temp").innerHTML = cityTemp
//     document.querySelector(".my_text").innerHTML = myText
// })

// myRequest.addEventListener('error', function () {
//     console.log("Error");
// })


const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


getWeather("cairo")

document.querySelector("#findWeatherBtn").addEventListener('click', function (e) {
    var city = document.querySelector("input").value;
    if (city == "") {
        getWeather("Cairo")
    } else {

        getWeather(city)
    }
})

document.body.addEventListener("keypress", function (e) {
    var city = document.querySelector("input").value;
    if (e.key == "Enter") {
        if (city == "") {
            getWeather("Cairo")
        } else {

            getWeather(city)
        }
    }
})

async function getWeather(city) {
    try {
        var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c9fc97bab5b24d71b2a113107252806&q=${city}&days=3`)
        var data = await res.json();

        document.querySelector(".row").innerHTML = `<div class="col-md-4">
                        <div class="item">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-center px-4">
                                    <p>${weekday[new Date(data.forecast.forecastday[0].date).getDay()]}</p>
                                    <p>${data.forecast.forecastday[0].date}</p>
                                </div>
                                <div class="card-body d-flex flex-column justify-content-around bg-dark">
                                <h1 class="h4 text-white-50" id="city_name">${data.location.name}</h1>
                                <div class="d-flex justify-content-around align-items-center">
                                    <h2 class="h1 card-text"> ${data.current.temp_c} °C</h2>
                                    <img class="w-25" src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="">
                                </div>
                                    <p class=" myMainColor">${data.current.condition.text}</p>
                                    <div class="d-flex justify-content-around align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-umbrella me-2"></i>
                                            <p class="m-0">${data.current.humidity}%</p>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-arrows-up-down-left-right me-2"></i>
                                            <p class="m-0 my_text">${data.current.wind_dir}</p>
                                        </div>
                                        <div class="d-flex align-items-center ">
                                            <i class="fa-solid fa-wind me-2"></i>
                                            <p class="m-0">${data.current.wind_kph}km/h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="item">
                            <div class="card text-center">
                                <div class="card-header d-flex justify-content-between align-items-center px-4">
                                    <p>${weekday[new Date(data.forecast.forecastday[1].date).getDay()]}</p>
                                    <p>${data.forecast.forecastday[1].date}</p>
                                </div>
                                <div class="card-body bg-dark d-flex flex-column justify-content-center align-items-center">
                                <img class="w-25" src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">
                                        <h2 class="h1 card-text"> ${data.forecast.forecastday[1].day.maxtemp_c} °C</h2>
                                        <h4 class="card-text text-white-50"> ${data.forecast.forecastday[1].day.mintemp_c} °C</h4>
                                        <p class=" myMainColor">${data.current.condition.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item">
                            <div class="card text-center">
                                <div class="card-header d-flex justify-content-between align-items-center px-4">
                                    <p>${weekday[new Date(data.forecast.forecastday[2].date).getDay()]}</p>
                                    <p>${data.forecast.forecastday[2].date}</p>
                                </div>
                                <div class="card-body bg-dark d-flex flex-column justify-content-center align-items-center">
                                <img class="w-25" src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">
                                        <h2 class="h1 card-text"> ${data.forecast.forecastday[2].day.maxtemp_c} °C</h2>
                                        <h4 class="card-text text-white-50"> ${data.forecast.forecastday[2].day.mintemp_c} °C</h4>
                                        <p class=" myMainColor">${data.current.condition.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
    }
    catch (e) {
        document.querySelector(".row").innerHTML = `<h1 class="alert alert-danger z-2 text-center">Error Occured</h1>`
    }

}