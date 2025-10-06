document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

function calculateWindChill(t, w) {
  return (13.12 + 0.6215*t - 11.37*Math.pow(w, 0.16) + 0.3965*t*Math.pow(w,0.16)).toFixed(1);
}

let chillText = "N/A";
if (temp <= 10 && wind > 4.8) {
  chillText = calculateWindChill(temp, wind) + " °C";
}
document.getElementById("chill").textContent = chillText;
