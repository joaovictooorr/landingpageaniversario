const dataDoEvento = new Date("Feb 28, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60


    const diasAteEvento = Math.floor(distanciaDoEvento / diaEmMs);

    const horasAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);

    const minutosAteOEvento = Math.floor(diasAteEvento % horaEmMs / minutosEmMs);

    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}D ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S`
    
    if(distanciaDoEvento < 0){
        clearInterval(contAsHoras);
        document.getElementById('contador').innerHTML = 'evento expirado';
    }

}, 1000);
