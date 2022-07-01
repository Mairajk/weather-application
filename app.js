
function getWeather() {
    const iCity = document.querySelector("#iCity").value;


    axios.get(`https://api.weatherapi.com/v1/current.json?key=1148694ef40c4addba8201236223006&q=${iCity}`)
        .then(function (response) {
            // let data = "" ;
            const data = response.data;
            console.log(data);
            // document.querySelector(`#icon`).innerHTML = 
            document.querySelector(`#cityName`).innerHTML = ` <h2> ${data.location.name} , </h2>  `;
            document.querySelector(`#countryName`).innerHTML = ` <h3> ${data.location.country} . </h3> `;
            document.querySelector(`#temp`).innerHTML = ` <h2> ${data.current.temp_c} &degC / ${data.current.temp_f} &degF  </h2>`
            document.querySelector(`#weatherType`).innerHTML = ` <h2> ${data.current.condition.text} </h2>`
            // document.querySelector(`#maxTemp`).innerHTML = 
            // document.querySelector(`#minTemp`).innerHTML = 
            document.querySelector(`#precipitations`).innerHTML = ` <p> Precipitation : ${data.current.precip_in} % </p>`
            document.querySelector(`#humidity`).innerHTML = `<p> Humidity : ${data.current.humidity} % </p>`
            document.querySelector(`#wind`).innerHTML = ` <p> Wind : ${data.current.wind_kph} km/h </p> `
            document.querySelector(`#visibility`).innerHTML = ` <p> Visibility : ${data.current.vis_km} km/h </p>`

        })
}
// getWeather();
