

let escolhaDoDEV = process.argv[2]



function escolhaDoPC(min, max) {
    return Math.floor(Math.random() * max) + min  
  }
  
  let num = escolhaDoPC(1, 3);
  switch (num) {
    case 1: escolhaDoPC = "Pedra"; break;
    case 2: escolhaDoPC = "Papel"; break;
    case 3: escolhaDoPC = "Tesoura"; break;

    
  }


if (escolhaDoDEV === escolhaDoPC){

console.log(`Voce escolheu ${escolhaDoDEV} e o computador ${escolhaDoPC}, deu empate!`)

}else if(escolhaDoDEV==="Pedra" && escolhaDoPC==="Tesoura"){

    console.log(`Voce escolheu ${escolhaDoDEV} e o computador ${escolhaDoPC}, você ganhou!`)

}else if(escolhaDoDEV==="Tesoura" && escolhaDoPC==="Papel"){

    console.log(`Voce escolheu ${escolhaDoDEV} e o computador ${escolhaDoPC}, você ganhou!`)

}else if(escolhaDoDEV==="Papel" && escolhaDoPC==="Pedra"){

    console.log(`Voce escolheu ${escolhaDoDEV} e o computador ${escolhaDoPC}, você ganhou!`)
    
}else{

    console.log(`Voce escolheu ${escolhaDoDEV} e o computador ${escolhaDoPC}, infelizmente você perdeu!`)
}

