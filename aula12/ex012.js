var now = new Date();
var horas = now.getHours();

console.log(`Horário: ${horas}:${now.getMinutes()}`)

if (horas < 0 || horas > 23) {
    console.log('Hora inválida.');
} else if (horas < 4) {
    console.log('Boa madrugada!');
} else if (horas < 12) {
    console.log('Bom dia!');
} else if (horas <= 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}

// Time is relative to the environment JS code is executed.
// So it may varies if it is on server or client.