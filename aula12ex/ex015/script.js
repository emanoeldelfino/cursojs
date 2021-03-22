function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fgen = document.getElementsByName('radgen');
        var idade = ano - Number(fAno.value);
        var gênero = '';
        var imgFile = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fgen[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                imgFile = 'bebe-m';
            } else if (idade < 21) {
                // Jovem
                imgFile = 'jovem-m';
            } else if (idade < 50) {
                // Adulto
                imgFile = 'adulto-m';
            } else {
                // Idoso
                imgFile = 'idoso-m';
            }
        } else if (fgen[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                imgFile = 'bebe-f';
            } else if (idade < 21) {
                // Jovem
                imgFile = 'jovem-f';
            } else if (idade < 50) {
                // Adulto
                imgFile = 'adulto-f';
            } else {
                // Idoso
                imgFile = 'idoso-f';
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        img.setAttribute('src', `images/foto-${imgFile}.png`);
        res.appendChild(img);
    }
}
