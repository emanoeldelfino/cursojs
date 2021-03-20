
function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    hora = 23;

    msg.innerHTML = `Horário: ${hora}:${data.getMinutes()}`
    
    if (hora < 0 || hora > 23) {
        alert('Hora inválida');
    } else if (hora > 18 || hora < 3) {
        img.src = './night.png';
        document.body.style.background = '#26273c';
    } else if (hora > 12){
        img.src = './afternoon.png';
        document.body.style.background = '#b9846f';
    } else {
        img.src = './morning.png';
        document.body.style.background = '#f6c28f';
    }

}

carregar();
