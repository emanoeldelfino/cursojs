
function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    hora = 23;

    msg.innerHTML = `Horário: ${hora}:${data.getMinutes()}`

    if (hora < 0 || hora > 23) {
        alert('Invalid time!');
    } else {
        var imgName, color;
        if (hora > 18 || hora < 5) {
            imgName = 'night';
            colorCode = '26273c';
        } else if (hora > 12) {
            imgName = 'afternoon';
            colorCode = 'b9846f';
        } else {
            imgName = 'morning';
            colorCode = 'f6c28f';
        }

        img.src = `./images/${imgName}.png`;
        document.body.style.background = `#${colorCode}`;
    }

}

carregar();
