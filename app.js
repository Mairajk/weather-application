function getWeather() {
    const iCity = document.querySelector("#iCity").value;


    axios.get(`https://api.weatherapi.com/v1/current.json?key=1148694ef40c4addba8201236223006&q=${iCity}`)
        .then(function (response) {
            // let data = "" ;

            document.querySelector(`#weatherReport`).removeAttribute("class")

            const data = response.data;
            console.log(data);

            let icon = data.current.condition.icon;
            icon.replace("/file// ");
            document.querySelector(`#wIcon`).src = icon;
            document.querySelector(`#cityName`).innerHTML = ` <h2> ${data.location.name} , </h2>  `;
            document.querySelector(`#countryName`).innerHTML = ` <h3> ${data.location.country} . </h3> `;
            document.querySelector(`#temp`).innerHTML = ` <h2> ${data.current.temp_c} &degC   </h2>`
            // / ${data.current.temp_f} &degF
            document.querySelector(`#weatherType`).innerHTML = ` <h2> ${data.current.condition.text} </h2>`
            document.querySelector(`#precipitations`).innerHTML = ` <p class="cHead"> Precipitation: </p> <p class="content"> ${data.current.precip_in}% </p>`
            document.querySelector(`#humidity`).innerHTML = `<p class="cHead"> Humidity: </p> <p class="content"> ${data.current.humidity} % </p>`
            document.querySelector(`#wind`).innerHTML = ` <p class="cHead"> Wind: </p> <p class="content"> ${data.current.wind_kph} km/h </p> `
            document.querySelector(`#visibility`).innerHTML = ` <p class="cHead"> Visibility: </p> <p class="content"> ${data.current.vis_km}km/h </p>`
            // document.querySelector(`#maxTemp`).innerHTML = 
            // document.querySelector(`#minTemp`).innerHTML = 


        })
}
// getWeather();