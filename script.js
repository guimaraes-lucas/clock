// Clock

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const clock = setInterval(function time() {
    const currentDate = new Date();

    let hr = currentDate.getHours();
    let min = currentDate.getMinutes();
    let seg = currentDate.getSeconds();

    
    if (hr <10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

})


// Weather widget

const key = "2ab4614bac884bd93eff8c54a7f29d14";


function search() {
    const input = document.querySelector(".input-cidade").value;

    searchCity(input)
};

async function searchCity(input) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    printData(dados);
};

function printData(dados) {
    document.querySelector('.city').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.temperatura').innerHTML =Math.floor(dados.main.temp) + " °C";
    document.querySelector('.ambiente').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector('.weather-img').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados);
}