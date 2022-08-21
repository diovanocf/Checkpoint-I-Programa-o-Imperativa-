function microondas(opcao, tempo){ 
    let tempoPadrao = 0;
    switch(opcao){
        case 1: //Pipoca
        tempoPadrao = 10;
        break;
        case 2: //Macarrao
        tempoPadrao = 8;
        break;
        case 3: //Carne
        tempoPadrao =15;
        break;
        case 4: //Feijao 
        tempoPadrao = 12;
        break;
        case 5: //Brigadeiro
        tempoPadrao = 8;
        break; 
        default:
            
        console.log("Prato inexistente");
}
    
if (tempo < tempoPadrao){
    console.log("Tempo insuficiente");
} else if (tempo > 3*tempoPadrao){
    console.log("Kabuum!");
} else if (tempo > 2*tempoPadrao){
    console.log("A comida queimou!");
}

console.log("Prato pronto, bom apetite!!!");
}

microondas();