function verificar(){
    var data  = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro!! Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = `Homem`
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'kid-boy.jpg')
            }else if(idade < 21 ){
                img.setAttribute('src', 'young-man.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adult-man.jpg')
            }else{
                img.setAttribute('src', 'older-man.jpg')
            }
        }else if (fsex[1].checked){
            genero =`Mulher`
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'kid-girl.jpg')
            }else if(idade < 21 ){
                img.setAttribute('src', 'young-woman.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adult-woman.jpg')
            }else{
                img.setAttribute('src', 'older-woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}