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
        var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=3`, {
            method: "GET",
            headers :{
                "key": "c9fc97bab5b24d71b2a113107252806" // <=== I want a bonus here HAHA xD
            }
        })
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