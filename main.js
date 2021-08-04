(function relogio() {
    const hr = document.getElementById('hr');
    const mn = document.getElementById('mn');
    const sg = document.getElementById('sg');
    const dg = document.getElementById('dg');
    

    function data () {
        const dia = new Date();
        const hora = dia.getHours();
        const minutos = dia.getMinutes();
        const segundos = dia.getSeconds();

        converter(hora, 12, hr);
        converter(minutos, 60, mn);
        converter(segundos, 60, sg);
        digitalData();
    }

    function converter(valor, divisor, seletor) {
        const resultado = ((valor / divisor) * 360) + 90;
        seletor.style.transform = `rotate(${resultado}deg)`;
    }

    function digitalData (){
        const dia = new Date();
        const hora = dia.getHours();
        const minutos = dia.getMinutes();
        const segundos = dia.getSeconds();

        return dg.innerHTML = `<p>${hora}:${minutos}:${segundos}</p>`
    }
    

    setInterval(data, 1000);
})();


