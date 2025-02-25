let cargador = 7;//almacenamos 7 balas

function chauchat(cargador) {
    let balazos = 0;
    //para que se bloquee el 80% de las veces
    for (let i = 0; i < cargador; i++) {
        let odds = Math.random();
        if (odds < 0.8) {
            console.log("pium!");
        }
        //Espacio cada 3 balazos
        if (balazos % 3 === 0) {
            console.log(" ");
        } else {
            console.log("Illo, me he quedado pillá!");
            break;
            }
    } 
}

chauchat(cargador);

