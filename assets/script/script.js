function verificar(){
    var data = new Date() ;
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res') ;
    console.log(fano);
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert ('[ERRO] Verfique os dados e tente novamente!');
    }     else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'assets/img/boy.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'assets/img/adolescentegaroto.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'assets/img/homem.jpg');
            }  else {
                // Idoso
                img.setAttribute('src', 'assets/img/idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'assets/img/girl.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'assets/img/adolescentegarota.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'assets/img/mulher.jpg');
            }  else {
                // Idoso
                img.setAttribute('src', 'assets/img/idosa.jpg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
