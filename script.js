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