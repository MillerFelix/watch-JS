let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

// Essa função vai executar o contador (o segundo parâmetro é o tempo, a cada 1000 é um segundo).
const timer = setInterval(() => {
  let now = new Date();
  // Pegando as horas em tempo real:
  let hourNow = now.getHours();
  // Pegando os minutos em tempo real:
  let minuteNow = now.getMinutes();
  // Pegando os segundos em tempo real:
  let secondsNow = now.getSeconds();

  // Validar para tem sempre dois caracteres de números "00"
  if (hourNow < 10) hourNow = "0" + hourNow;
  if (minuteNow < 10) minuteNow = "0" + minuteNow;
  if (secondsNow < 10) secondsNow = "0" + secondsNow;

  // Elementos do html vai receber o conteúdo da váriavel que está com os horários.
  hour.textContent = hourNow;
  minute.textContent = minuteNow;
  seconds.textContent = secondsNow;
});
