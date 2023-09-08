const MAX_ROW = 10;
const MAX_COLUMN = 10;
const environment = []; // matriz que representará o ambiente;
let lixo_total = 0;

function setLixoTotal (newTotal) {
    lixo_total = newTotal;
}

function getLixoTotal () {
    return lixo_total;
}

export {
    MAX_ROW,
    MAX_COLUMN,
    environment,
    setLixoTotal,
    getLixoTotal
}
