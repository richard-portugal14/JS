 let valores = [1, 6, 7, 8, 10]

 for(let pos in valores){
    console.log(`O vetor ${pos} recebe o valor ${valores[pos]}.`)
 }

 let lugar = valores.indexOf(4)
 if(lugar == -1){
    console.log('Nao existe este numero na variavel!')
    
 }else{
    console.log(`O valor esta na posição ${lugar}`)
 }
 