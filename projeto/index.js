let nomeHeroi = "Chamber"
let quantidadeXp = 10000
let nivel = Math.floor(quantidadeXp/1000)

switch(nivel){
    case 0:
        console.log ("O herói " + nomeHeroi + " está no nível Ferro")
        break

    case 1:
        console.log ("O herói " + nomeHeroi + " está no nível Bronze")
        break 

    case 2:
    case 3:
    case 4:         
        console.log ("O herói " + nomeHeroi + " está no nível Prata")
        break
    
    case 5:
    case 6:
        console.log ("O herói " + nomeHeroi + " está no nível Ouro")
        break 
        
    case 7:
        console.log ("O herói " + nomeHeroi + " está no nível Platina")
        break  

    case 8: 
        console.log ("O herói " + nomeHeroi + " está no nível Ascendente")
        break

    case 9:
        console.log ("O herói " + nomeHeroi + " está no nível Imortal")
        break

    default:
        console.log ("O herói " + nomeHeroi + " está no nível Radiante")
      
}


