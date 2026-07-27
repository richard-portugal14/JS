function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#f5d78d'
    }else if (hora >= 12 && hora < 18){
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#c08c08'
    }else{
        img.src = 'foto-noite.png'
        document.body.style.background = '#494949'
    }
}
