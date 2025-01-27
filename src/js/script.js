AOS.init();

const dataDoAniversario = new Date("Aug 02, 2025 00:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contador = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distancia = timeStampDoAniversario - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const diasRestantes = Math.floor(distancia / diaEmMs);

  document.getElementById("contador").innerHTML = `${diasRestantes} dias`;

  if (distancia < 0) {
    clearInterval(contador);
    document.getElementById("contador").innerHTML = "Feliz Aniversário!";
  }
}, 1000);
